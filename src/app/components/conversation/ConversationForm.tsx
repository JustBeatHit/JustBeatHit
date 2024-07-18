"use client"

import { AddMessage } from "@/lib/actions/gameActions"
import { useFormState } from "react-dom"

export default function ConversationForm({conversationId}: {conversationId: string}) {
    const [formState, dispatch] = useFormState(AddMessage, {conversationId: conversationId})


    return (
        <form action={dispatch}>
            <input type="text" name="content" />
            <input type="submit" />
            {formState.message}
        </form>
    )
}
