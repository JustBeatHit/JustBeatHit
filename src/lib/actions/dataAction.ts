"use server"

import { Schema } from "~/amplify/data/resource"
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils"
import { getErrorMessage } from "@/utils/error-message"

export async function getProfile() {
    try {
        console.info('getProfile')
        const user = await AuthGetCurrentUserServer()
        const { data: profile, errors } = await cookiesClient.models.UserProfile.get({ userId: String(user?.userId) })
        if (errors) {
            const error = errors[0]
            throw error
        }
        console.info(profile)

        return { ...profile }
    } catch (error) {
        throw error
    }
}

export async function hasAvailableSpace(partyId: string) {
    try {
        console.info('joinParty')
        const players = await getPlayers(partyId)
        if (players.length < 5) {
            // const { data: player, errors } = await cookiesClient.models.Player.create({ partyId, score: 0, profileId: userId }) as {data: Schema["Player"]["type"] | null, errors: any}
            return true
        }
    } catch (error) {
        throw error
    }
}

export async function createParty() {
    try {
        console.log('createParty')
        const {data:party, errors} = await cookiesClient.models.Party.create({ status: "Waiting"}) as {data: Schema["Party"]["type"] | null, errors: any}
        if (errors) {
            throw errors[0]
        }
        if (!party) {
            throw Error("Unexpected error")
        }
        return party.id
    } catch (error) {
        throw getErrorMessage(error)
    }
}

export async function createPlayer(partyId: string, userId: string) {
    try {
        console.info('createPlayer')
        const { data, errors } = await cookiesClient.models.Player.create({ partyId, score: 0, profileId: userId }) as {data: Schema["Player"]["type"] | null, errors: any}
        if (errors) {
            throw errors[0]
        }
        if (!data) {
            throw Error("Unexpected error")
        }
        return data.id
    } catch (error) {
        throw error
    }
}

export async function removePlayer(id: string) {
    try {
        console.info('removePlayer', id)
        const { data, errors } = await cookiesClient.models.Player.delete({id})// as {data: Schema["Player"]["type"] | null, errors: any}
        console.info(data)
        if (errors) {
            throw errors[0]
        }
        if (!data) {
            throw Error("Unexpected error")
        }
    } catch (error) {
        throw error
    }
}

export async function getPlayers(partyId: string) {
    console.info('getPlayers')
    const { data: players, errors } = await cookiesClient.models.Player.list({ filter: { partyId: { eq: partyId } } })
    if (errors) {
        throw errors[0]
    }
    return players
}

export async function createConversation(partyId: string) {
    try {
        console.info('createConversation')
        const { data: conversation, errors } = await cookiesClient.models.Conversation.create({ partyId }) as {data: Schema["Conversation"]["type"] | null, errors: any}
        if (errors) {
            throw errors[0]
        }
        if (!conversation) {
            throw Error("Unexpected error")
        }
        return conversation.id
    } catch (error) {
        throw error
    }
}

export async function createConversationUser(conversationId: string, userId: string) {
    try {
        console.info('createConversationUser')
        const { data, errors } = await cookiesClient.models.ConversationUser.create({ conversationId, userId }) as {data: Schema["ConversationUser"]["type"] | null, errors: any}
        if (errors) {
            throw errors[0]
        }
        if (!data) {
            throw Error("Unexpected error")
        }
        return data.id
    } catch (error) {
        throw error
    }
}