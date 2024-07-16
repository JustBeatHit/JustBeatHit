"use client"

import { authConfirmSignUp } from "@/lib/authActions"
import { useSearchParams } from "next/navigation"
import { useFormState, useFormStatus } from "react-dom"

export default function Page() {
  const searchParams = useSearchParams()
  const [errorMessage, dispatch] = useFormState(authConfirmSignUp, undefined)

  return (
    <div>
      <form className="" action={dispatch} >
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
