"use client"

import { authConfirmSignUp, authSendVerificationCode } from "@/lib/actions/authActions"
import { useSearchParams } from "next/navigation"
import { useFormState, useFormStatus } from "react-dom"

export default function Page() {
  const searchParams = useSearchParams()
  const [errorMessage, dispatch] = useFormState(authConfirmSignUp, undefined)
  const [sendErrorMessage, sendDispatch] = useFormState(authSendVerificationCode, undefined)

  return (
    <div>
      <h3>Confirmation</h3>
      <form className="" action={dispatch} >
        <input className=" hidden" type="text" id="email" name="email" readOnly value={String(searchParams.get("email"))} />
        <label htmlFor="code">Confirmation code :</label>
        {/* <p>The verification code has been sent to you by email.</p> */}
        <input className=" text-black" type="number" name="code" id="code" />
        <ConfirmButton/>
      </form>
      <form action={sendDispatch}>
        <input className=" hidden" type="text" id="email" name="email" readOnly value={String(searchParams.get("email"))} /> 
        <button className="secondary">
          Re-send code
        </button>
      </form>
    </div>
  )
}

function ConfirmButton() {
  const { pending } = useFormStatus()

  return (
    <button aria-disabled={pending}>
      Confirm
    </button>
  )
}
