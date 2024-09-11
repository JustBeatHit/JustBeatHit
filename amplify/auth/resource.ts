import { defineAuth } from "@aws-amplify/backend"
import { addUserToGroup } from "../data/add-user-to-group/resource"
import { postConfirmation } from "../auth/post-confirmation/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    preferredUsername: {
      mutable: true,
    },
    nickname: {
      mutable: true
    },
    profilePicture: {
      mutable: true
    },
  },
  groups: ["Admins"],
  access: (allow) => [
    allow.resource(addUserToGroup).to(["addUserToGroup"])
  ],
  triggers: {
    postConfirmation
  }
})
