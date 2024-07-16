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
      <form action={sendDispatch}>
        {/* A cacher */}
        <input className=" text-black hidden" type="text" id="email" name="email" readOnly value={String(searchParams.get("email"))} /> 
        <button>
          Re-send code
        </button>
      </form>
      <form className="" action={dispatch} >
        {/* A cacher */}
        <input className=" text-black hidden" type="text" id="email" name="email" readOnly value={String(searchParams.get("email"))} />
        <input className=" text-black" type="number" name="code" id="code" />
        <ConfirmButton/>
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
