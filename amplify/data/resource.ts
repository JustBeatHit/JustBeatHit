import { type ClientSchema, a, defineData } from "@aws-amplify/backend"
import { addUserToGroup } from "./add-user-to-group/resource"
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a.schema({
  UserProfile: a.model({
    userId: a.string().required(),
    profileOwner: a.string().required(),
    pseudo: a.string().required(),
    profilePicture: a.url(),
    conversationUsers: a.hasMany("ConversationUser", "userId"),
    Players: a.hasMany("Player", "profileId"),
    pricingPlan: a.string().default("Free"),
    outgoingFriendRequests: a.hasMany("FriendRequest", "requestId"),
    incomingFriendRequests: a.hasMany("FriendRequest", "requestId")
  }).identifier(["userId"]).secondaryIndexes((index) => [index("profileOwner")]).authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),

  FriendRequest: a.model({
    requestId: a.id().required(),
    userUsername: a.string().required(),
    user: a.belongsTo("UserProfile", "requestId"),
    friendUsername: a.string().required(),
    friend: a.belongsTo("UserProfile", "requestId"),
    status: a.enum(["pending", "accepted", "rejected"]),
  }).identifier(["requestId"]),

  Party: a.model({
    players: a.hasMany("Player", "partyId"),
    conversation: a.hasOne("Conversation", "partyId"),
    scores: a.json(),
    status: a.enum(['Waiting',"Done","InProgress"])
  }),

  Player: a.model({
    profileId: a.id(),
    partyId: a.id(),
    user: a.belongsTo("UserProfile", "profileId"),
    party: a.belongsTo("Party", "partyId"),
    charPos: a.integer(),
    score: a.integer().required().default(0),
  }),

  Conversation: a.model({
    partyId: a.id(),
    party: a.belongsTo("Party", "partyId"),
    users: a.hasMany("ConversationUser", "conversationId"),
    messages: a.hasMany("Message", "conversationId"),
  }),

  ConversationUser: a.model({
    userId: a.string(),
    conversationId: a.id(),
    user: a.belongsTo("UserProfile", "userId"),
    conversation: a.belongsTo("Conversation", "conversationId"),
    messages: a.hasMany("Message", "userId")
  }),

  Message: a.model({
    conversationId: a.id().required(),
    userId: a.string().required(),
    content: a.string().required(),
    sender: a.belongsTo("ConversationUser", "userId"),
    conversation: a.belongsTo("Conversation", "conversationId")
  }),

  //lambda
  addUserToGroup: a
    .mutation()
    .arguments({
      userId: a.string().required(),
      groupName: a.string().required(),
    })
    .authorization((allow) => [allow.group("Admins")])
    .handler(a.handler.function(addUserToGroup))
    .returns(a.json())

}).authorization((allow) => [allow.authenticated().to(["read"]),allow.owner().to(["create"]),allow.resource(postConfirmation)])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});