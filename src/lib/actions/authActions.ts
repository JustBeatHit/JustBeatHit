import { getErrorMessage } from "@/utils/error-message"
import { signUp, confirmSignUp, signIn, signOut, resendSignUpCode, autoSignIn } from "aws-amplify/auth"
import { redirect } from "next/navigation"
import { z } from 'zod'

export type RegisterState = {
    errors?: {
        email?: string[];
        password?: string[];
        repeatPassword?: string[];
    };
    message?: string | null;
}

const registerForm = z.object({
    email: z.string().email({ message: "String must be a valid e-mail adress." }),
    password: z.string().min(8, "Password must be at least 8 characters.").regex(/[A-Z]/, "Password must contain at least one uppercase letter.").regex(/[a-z]/, "Password must contain at least one lowercase letter.").regex(/\d/, "Password must contain at least one digit.").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character."),
    repeatPassword: z.string()
}).superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['repeatPassword']
        });
    }
});

export async function authSignUp(
    prevState: RegisterState,
    formData: FormData,
) {
    const validatedFields = registerForm.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        repeatPassword: formData.get('repeatPassword'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create account.',
        };
    }

    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: validatedFields.data.email,
            password: validatedFields.data.password,
            options: {
                userAttributes: {},
                autoSignIn: true
            }
        })
    } catch (error) {
        return { message: getErrorMessage(error) }
    }
    redirect(`/auth/confirm?email=${String(formData.get("email"))}`)
}

export async function authSendVerificationCode(
    prevState: { message?: string; erroMessage?: string } | undefined,
    formData: FormData,
) {
    let currentState;
    try {
        await resendSignUpCode({
            username: String(formData.get("email")),
        })
        currentState = {
            message: "Code send successfully",
        }
    } catch (error) {
        currentState = {
            errorMessage: getErrorMessage(error)
        }
    }
    return currentState
}

export async function authConfirmSignUp(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const { isSignUpComplete, nextStep: { signUpStep } } = await confirmSignUp({
            username: String(formData.get("email")),
            confirmationCode: String(formData.get("code")),
        })
        if (signUpStep === "COMPLETE_AUTO_SIGN_IN") {
            await autoSignIn()
        }
    } catch (error) {
        return getErrorMessage(error)
    }
    redirect("/auth/login")
}

export type LoginState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string | null;
}

const loginForm = z.object({
    email: z.string().email({ message: "String must be a valid e-mail adress." }),
    password: z.string().min(8, "Password must be at least 8 characters.").regex(/[A-Z]/, "Password must contain at least one uppercase letter.").regex(/[a-z]/, "Password must contain at least one lowercase letter.").regex(/\d/, "Password must contain at least one digit.").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character."),
})

export async function authSignIn(
    prevState: LoginState,
    formData: FormData
) {
    console.log("Trigger sign-in")

    const validatedFields = loginForm.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    console.info(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    let redirectPath = "default"
    try {
        const { isSignedIn, nextStep } = await signIn({
            username: validatedFields.data.email,
            password: validatedFields.data.password
        })
        if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
            await resendSignUpCode({
                username: validatedFields.data.email
            })
            redirectPath = "confirm"
        }
    } catch (error) {
        return { message: getErrorMessage(error) }
    }
    if (redirectPath === "confirm") {
        redirect(`/auth/confirm?email=${validatedFields.data.email}`)
    }
    redirect("/karakaku")
}

export async function authSignOut() {
    try {
        await signOut()
    } catch (error) {
        console.log(getErrorMessage(error))
    }
    redirect("/auth/login")
}