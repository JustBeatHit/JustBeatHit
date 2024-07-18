"use client"

import { useEffect, useState } from "react"
import { Schema } from "~/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import ConversationForm from "./ConversationForm";
import useAuthUser from "@/lib/hooks/use-auth-user";

const client = generateClient<Schema>()

export default function Conversation({ conversationId }: { conversationId: string }) {
    const user = useAuthUser()
    const [messages, setMessages] = useState<Schema["Message"]["type"][]>([])

    useEffect(() => {
        console.info("sub")
        const sub = client.models.Message.observeQuery({ filter: { conversationId: { eq: conversationId } } }).subscribe({
            next: ({ items, isSynced }) => {
                setMessages([...items]);
            },
        });
        return () => sub.unsubscribe();
    }, [conversationId])

    return (
        <>
            <div className="flex flex-col items-center justify-between p-2">
                {messages?.map((message) => (
                    <div key={message.id}>{message.content}</div>
                ))}
            </div>
            <ConversationForm conversationId={conversationId} />
        </>
    )
}
