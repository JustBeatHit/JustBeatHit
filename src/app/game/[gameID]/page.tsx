import { Schema } from "~/amplify/data/resource";
import Conversation from "@/app/components/conversation/Conversation";
import Game from "@/app/components/game/Game";
import { cookiesClient } from "@/utils/amplify-utils";


export default async function Page({ params }: { params: { gameID: string } }) {
    const {data: party} = await cookiesClient.models.Party.get({id: params.gameID})
    if(!party){
        throw "Unexpected error"
    }
    const {data: players} = await party.players()
    if(!players){
        throw "Unexpected error"
    }
    const {data: conversation} = await party.conversation()
    if(!conversation){
        throw "Unexpected error"
    }

    return (
        <div>
            <h1>Page</h1>
            {party && <Game partyId={party.id}/>}
            {conversation && <Conversation conversationId={conversation.id}/>}
        </div>
    )
}
