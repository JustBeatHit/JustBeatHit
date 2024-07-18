"use client"

import { useEffect, useRef, useState } from "react"
import { Schema } from "~/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import useAuthUser from "@/lib/hooks/use-auth-user";
import { createPlayer, getPlayers, removePlayer } from "@/lib/actions/dataAction";

const client = generateClient<Schema>()

export default function Game({ partyId }: { partyId: string }) {
    const user = useAuthUser()
    const playerId = useRef<string>()


    useEffect(() => {
        if (user) {
            console.info("sub")
            const sub = client.models.Party.observeQuery({ filter: { id: { eq: partyId } } })
                .subscribe({
                    next: async (party) => {
                        console.info('Party', {party})
                        const { data: players } = await party.items[0].players()
                        console.info('Players', {players})
                        const playerAlreadExist = players.some((player) => {
                            return player.profileId === user?.userId
                        })
                        console.info(playerAlreadExist)
                        if (!playerAlreadExist) {
                            playerId.current = await createPlayer(partyId, user?.userId)
                            console.info('Player created', playerId.current)
                        }
                    },
                    error: (err) => {
                        console.info('Error',err)
                    },
                });
            return () => {
                sub.unsubscribe()
                console.info('Remove player',playerId)
                if(playerId.current){
                    removePlayer(playerId.current)
                }
            };
        }
    }, [partyId, user])

    return (
        <>

        </>
    )
}
