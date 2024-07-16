import { getErrorMessage } from "@/utils/error-message"
import { signUp, confirmSignUp, signIn, signOut, resendSignUpCode, autoSignIn } from "aws-amplify/auth"
import { redirect } from "next/navigation"

export async function authSignUp(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        /**
         * @todo: validate input
         */

        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
            options: {
                userAttributes: {
                    preferred_username: String(formData.get("username")),
                },
                autoSignIn: true
            }
        })
    } catch (error) {
        return getErrorMessage(error)
    }
    redirect(`/auth/confirm?email=${String(formData.get("email"))}`)
}

export async function authSendVerificationCode(
    prevState: { message?: string; erroMessage?: string} | undefined,
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
){
    try {
        const { isSignUpComplete, nextStep: {signUpStep} } = await confirmSignUp({
            username: String(formData.get("email")),
            confirmationCode: String(formData.get("code")),
        })
        if(signUpStep === "COMPLETE_AUTO_SIGN_IN"){
            await autoSignIn()
        }
    } catch (error) {
        return getErrorMessage(error)
    }
    redirect("/auth/login")
}

export async function authSignIn(
    prevState: string | undefined,
    formData: FormData
){
    try {
        const { isSignedIn, nextStep } = await signIn({
            username: String(formData.get("email")),
            password: String(formData.get("password"))
        })
        if(nextStep.signInStep === "CONFIRM_SIGN_UP"){
            await resendSignUpCode({
                username: String(formData.get("email"))
            })
            redirect("/auth/confirm")
        }
    } catch (error) {
        return getErrorMessage(error)
    }
    redirect("/game")
}

export async function authSignOut() {
    try {
        await signOut()
    } catch (error) {
        console.log(getErrorMessage(error))
    }
    redirect("/auth/login")
}