"use client"

import { authSignUp } from "@/lib/actions/authActions";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authSignUp, undefined);

  return (
    <div>
      <h3>Register</h3>
      <form action={dispatch}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="exemple@email.com"/>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="JohnDoe01"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Create password"/>
        {/* <label htmlFor="repeatPassword">Repeat Password:</label> */}
        <input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat your password"/>
        <SignUpButton/>
      </form>
    </div>
  )
}

export function SignUpButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Register
    </button>
  )
}

