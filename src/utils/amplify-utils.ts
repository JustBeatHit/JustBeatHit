// utils/amplify-utils.ts
import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";

import { type Schema } from "~/amplify/data/resource";
import outputs from "~/amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function AuthGetCurrentUserServer() {
    return await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => {
        try {
          const session = await fetchAuthSession(contextSpec)
          if(!session.tokens){
            return
          }
          const user ={
            ...(await getCurrentUser(contextSpec)),
            isAdmin: false
          }
          const groups = session.tokens.accessToken.payload["cognito:groups"]
          //@ts-ignore
          user.isAdmin = Boolean(groups && groups.includes("Admins"))

          return user
        } catch (error) {
          console.error(error)
        }
      }
    })
}