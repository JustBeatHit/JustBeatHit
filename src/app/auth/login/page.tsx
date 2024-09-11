"use client"

import { authSignIn, LoginState } from "@/lib/actions/authActions"
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom"
import { z } from "zod";

const loginForm = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/\d/, "Password must contain at least one digit").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
})

export default function Page() {
  const initialState: LoginState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(authSignIn, initialState)

  return (
    <div className="form-container">
      <div className='form-header'>
        <h3>Login</h3>
        <p className="description">Provide email and password to login</p>
      </div>
      <form action={dispatch}>
        <label htmlFor="email">E-mail :</label>
        <input className=' text-black' type="text" id="email" name="email" placeholder="exemple@email.com" />
        <span id="email-error" className="form-error" aria-live="polite" aria-atomic="true">{state.errors?.email && state.errors?.email.length > 0 ? state.errors?.email[0] : " "}</span>
        <label htmlFor="password">Password :</label>
        <input className=' text-black' type="password" id="password" name="password" placeholder="Type your password" />
        <span id="repeatPassword-error" className="form-error" aria-live="polite" aria-atomic="true">{state.errors?.password && state.errors?.password.length > 0 ? state.errors?.password[0] : " "}</span>
        <span id="form-error" className="form-error" aria-live="polite" aria-atomic="true">{state.message}</span>
        <LoginButton />
      </form>
      <Link href="/auth/register" className="link">Don't have an account yet? Sign up here.</Link>
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
