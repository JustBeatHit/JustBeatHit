'use client'

import { authSignUp } from "@/lib/authActions";
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authSignUp, undefined);


  return (
    <div>
      <form action={dispatch}>
        <label htmlFor="email">Email:</label>
        <input className=' text-black' type="text" id="email" name="email" />
        <label htmlFor="username">Username:</label>
        <input className=' text-black' type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input className=' text-black' type="password" id="password" name="password" />
        <SignUpButton/>
      </form>
    </div>
  )
}

export function SignUpButton() {
  const { pending } = useFormStatus()

  return (
    <button aria-disabled={pending}>
      Confirm
    </button>
  )
}

