import { generateClient } from "aws-amplify/data";
import { fetchAuthSession, fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Schema } from "~/amplify/data/resource";

const client = generateClient<Schema>()

export default function useAuthUser() {
    const [user, setUser] = useState<Record<string, any>>()

    useEffect(()=>{
        async function getUser() {
            const session = await fetchAuthSession()
            if(!session.tokens){
                return
            }
            const user = {
                ...(await getCurrentUser()),
                ...(await fetchUserAttributes()),
                isAdmin: false
            }
            const {data: userProfile} = await client.models.UserProfile.get({userId: user.userId})
            const groups = session.tokens.accessToken.payload["cognito:groups"]
            //@ts-ignore
            user.isAdmin = Boolean(groups && groups.includes("Admins"))
            console.info({...user, profile: userProfile})
            setUser({...user, profile: userProfile})
        }
        getUser()
    },[])
    return user
}