"use server"

import { cookiesClient } from "@/utils/amplify-utils"
import { getErrorMessage } from "@/utils/error-message"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { createConversation, createConversationUser, createParty, createPlayer, getProfile, hasAvailableSpace } from "./dataAction"

export async function createPartyHandler(
    prevState: { errorMessage?: string } | undefined,
    formData: FormData,
): Promise<{ errorMessage?: string } | undefined> {
    let partyId: string
    try {
        console.info('createPartyHandler')

        const { userId } = await getProfile()
        if (!userId) {
            throw new Error("Unexpected error")
        }

        partyId = await createParty()
        await createPlayer(partyId, userId)
        const conversationId = await createConversation(partyId)
        await createConversationUser(conversationId, partyId)
        revalidatePath('/game')
    } catch (error) {
        console.error(error)
        return { errorMessage: getErrorMessage(error) }
    }
    redirect(`/game/${partyId}`)
}

export async function joinPartyHandler(
    prevState: { errorMessage?: string } | undefined,
): Promise<{ errorMessage?: string } | undefined> {
    let partyId = undefined
    try {
        const { userId } = await getProfile()
        if (!userId) {
            throw new Error("Unauthenticated user")
        }

        const { data: partys, errors } = await cookiesClient.models.Party.list({ filter: { status: { eq: "Waiting" } } })
        if (errors) {
            throw errors[0]
        }

        for (const party of partys) {
            const has = await hasAvailableSpace(party.id);
            console.info('has', has);
            if (has) {
                partyId = party.id;
                break;
            }
        }

        if (!partyId) {
            partyId = await createParty()
            console.info("partyId : ", partyId)
            await createPlayer(partyId, userId)
            const conversationId = await createConversation(partyId)
            console.info("conversationId : ", conversationId)
            await createConversationUser(conversationId, partyId)
            revalidatePath('/games')
        }
    } catch (error) {
        return { errorMessage: getErrorMessage(error) }
    }
    redirect(`/game/${partyId}`)
}


export async function AddMessage(
    prevState: { message?: string, conversationId: string },
    formData: FormData,
) {
    try {
        console.info('AddMessage')
        const content = String(formData.get('content'))
        console.info('content', content)

        const { userId } = await getProfile()
        if (!userId) {
            throw new Error("Unauthenticated user")
        }
        const { data: message } = await cookiesClient.models.Message.create({ userId, conversationId: prevState.conversationId, content })
        console.info('message', message)
        return { ...prevState}
    } catch (error) {
        console.error(error)
        throw { ...prevState, message: getErrorMessage(error) }
    }
}