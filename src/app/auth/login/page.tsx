'use client'
import { authSignIn } from "@/lib/actions/authActions"
import { useFormState, useFormStatus } from "react-dom"

export default function Page() {
    const [errorMessage, dispatch] = useFormState(authSignIn, undefined)

    return (
        <div>
            <form action={dispatch}>
                <label htmlFor="email">Username :</label>
                <input className=' text-black' type="text" id="email" name="email" />
                <label htmlFor="password">Password :</label>
                <input className=' text-black' type="password" id="password" name="password" />
                <input type="submit" />
            </form>
            <LoginButton/>
        </div>
      )
}

function LoginButton() {
    const { pending } = useFormStatus()
  
    return (
      <button aria-disabled={pending}>
        Login
      </button>
    )
  }
  