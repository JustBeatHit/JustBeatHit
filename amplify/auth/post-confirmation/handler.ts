import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";
import { createUserProfile } from "./graphql/mutations";


Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "userPool",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);



const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const userId = event.userName; // Ensure userId is properly retrieved
  const userSub = event.request.userAttributes?.sub; // Ensure userSub is properly retrieved

  if (!userId || !userSub) {
    throw new Error('User attributes are missing or incomplete');
  }

  try {
    const result = await client.graphql({
      query: createUserProfile,
      variables: {
        input: {
          userId: userId, // Ensure userId is not null
          profileOwner: `${userSub}::${event.userName}`,
          pricingPlan: "Free",
          pseudo: `Player${Math.random() * 100}`,
        },
      },
    });

    console.log('Mutation result:', result);
  } catch (error) {
    console.error('Error occurred:', JSON.stringify(error, null, 2));
    throw new Error(JSON.stringify(error));  // Re-throw the error after logging it
  }
  return event;
};