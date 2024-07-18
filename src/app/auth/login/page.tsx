'use client'
import { authSignIn } from "@/lib/actions/authActions"
import { useFormState, useFormStatus } from "react-dom"

export default function Page() {
    const [errorMessage, dispatch] = useFormState(authSignIn, undefined)

    return (
        <div>
            <h3>Login</h3>
            <form action={dispatch}>
                <label htmlFor="email">E-mail :</label>
                <input className=' text-black' type="text" id="email" name="email" placeholder="exemple@email.com"/>
                <label htmlFor="password">Password :</label>
                <input className=' text-black' type="password" id="password" name="password" />
                <LoginButton/>
            </form>
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
  