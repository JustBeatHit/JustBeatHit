"use client"

import { joinPartyHandler } from "@/lib/actions/gameActions"
import { useFormState } from "react-dom"

export default function JoinPartyButton() {
    const [response, dispatch] = useFormState(joinPartyHandler, {errorMessage: ""})

    return (
        <form action={dispatch}>
            <button>Rejoindre une partie</button>
            {response?.errorMessage && <p>{response?.errorMessage}</p>}
        </form>
    )
}
