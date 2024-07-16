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