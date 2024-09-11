"use client"

import { authSignUp, RegisterState } from "@/lib/actions/authActions";
import { useFormState, useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const initialState: RegisterState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(authSignUp, initialState)
  const { pending } = useFormStatus()

  return (
    <div className="form-container">
      <div className='form-header'>
        <h3>Register</h3>
        <p className="description">Provide email and password to create an account</p>
      </div>
      <form action={dispatch} aria-describedby="form-error">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="exemple@email.com" aria-describedby="email-error" />
        <span id="email-error" className="form-error" aria-live="polite" aria-atomic="true">{state.errors?.email && state.errors?.email.length > 0 ? state.errors?.email[0] : " "}</span>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create password" aria-describedby="password-error" />
        <span id="password-error" className="form-error" aria-live="polite" aria-atomic="true">{state.errors?.password && state.errors?.password.length > 0 ? state.errors?.password[0] : " "}</span>
        <label htmlFor="repeat-Password">Repeat password</label>
        <input type="password" id="repeat-password" name="repeatPassword" placeholder="Repeat your password" aria-describedby="repeatpassword-error" />
        <span id="repeatPassword-error" className="form-error" aria-live="polite" aria-atomic="true">{state.errors?.repeatPassword && state.errors?.repeatPassword.length > 0 ? state.errors?.repeatPassword[0] : " "}</span>
        <span id="form-error" className="form-error" aria-live="polite" aria-atomic="true">{state.message}</span>
        <SignUpButton />
      </form>
      <Link href="/auth/login" className="link">Already have an account? Sign in here.</Link>
    </div>
  )
}

function SignUpButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending && <Loader2 className='spinner' />}
      {!pending && "Register"}
    </button>
  )
}

