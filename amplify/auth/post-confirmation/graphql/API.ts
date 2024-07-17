/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Conversation = {
  __typename: "Conversation",
  createdAt: string,
  id: string,
  messages?: ModelMessageConnection | null,
  owner?: string | null,
  party?: Party | null,
  partyId?: string | null,
  updatedAt: string,
  users?: ModelConversationUserConnection | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  content: string,
  conversation?: Conversation | null,
  conversationId: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  sender?: ConversationUser | null,
  updatedAt: string,
  userId: string,
};

export type ConversationUser = {
  __typename: "ConversationUser",
  conversation?: Conversation | null,
  conversationId: string,
  createdAt: string,
  id: string,
  messages?: ModelMessageConnection | null,
  owner?: string | null,
  updatedAt: string,
  user?: UserProfile | null,
  userId: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  Players?: ModelPlayerConnection | null,
  conversationUsers?: ModelConversationUserConnection | null,
  createdAt: string,
  incomingFriendRequests?: ModelFriendRequestConnection | null,
  outgoingFriendRequests?: ModelFriendRequestConnection | null,
  pricingPlan?: string | null,
  profileOwner: string,
  profilePicture?: string | null,
  pseudo: string,
  updatedAt: string,
  userId: string,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type Player = {
  __typename: "Player",
  charPos?: number | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  party?: Party | null,
  partyId: string,
  profileId: string,
  score: number,
  updatedAt: string,
  user?: UserProfile | null,
};

export type Party = {
  __typename: "Party",
  conversation?: Conversation | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  players?: ModelPlayerConnection | null,
  scores?: string | null,
  status?: PartyStatus | null,
  updatedAt: string,
};

export enum PartyStatus {
  Done = "Done",
  InProgress = "InProgress",
  Waiting = "Waiting",
}


export type ModelConversationUserConnection = {
  __typename: "ModelConversationUserConnection",
  items:  Array<ConversationUser | null >,
  nextToken?: string | null,
};

export type ModelFriendRequestConnection = {
  __typename: "ModelFriendRequestConnection",
  items:  Array<FriendRequest | null >,
  nextToken?: string | null,
};

export type FriendRequest = {
  __typename: "FriendRequest",
  createdAt: string,
  friend?: UserProfile | null,
  friendUsername: string,
  owner?: string | null,
  requestId: string,
  status?: FriendRequestStatus | null,
  updatedAt: string,
  user?: UserProfile | null,
  userUsername: string,
};

export enum FriendRequestStatus {
  accepted = "accepted",
  pending = "pending",
  rejected = "rejected",
}


export type ModelConversationUserFilterInput = {
  and?: Array< ModelConversationUserFilterInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelConversationUserFilterInput | null,
  or?: Array< ModelConversationUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelConversationFilterInput = {
  and?: Array< ModelConversationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelConversationFilterInput | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelFriendRequestFilterInput = {
  and?: Array< ModelFriendRequestFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  friendUsername?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelFriendRequestFilterInput | null,
  or?: Array< ModelFriendRequestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  requestId?: ModelIDInput | null,
  status?: ModelFriendRequestStatusInput | null,
  updatedAt?: ModelStringInput | null,
  userUsername?: ModelStringInput | null,
};

export type ModelFriendRequestStatusInput = {
  eq?: FriendRequestStatus | null,
  ne?: FriendRequestStatus | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMessageFilterInput = {
  and?: Array< ModelMessageFilterInput | null > | null,
  content?: ModelStringInput | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMessageFilterInput | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelPartyFilterInput = {
  and?: Array< ModelPartyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPartyFilterInput | null,
  or?: Array< ModelPartyFilterInput | null > | null,
  owner?: ModelStringInput | null,
  scores?: ModelStringInput | null,
  status?: ModelPartyStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPartyStatusInput = {
  eq?: PartyStatus | null,
  ne?: PartyStatus | null,
};

export type ModelPartyConnection = {
  __typename: "ModelPartyConnection",
  items:  Array<Party | null >,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
  and?: Array< ModelPlayerFilterInput | null > | null,
  charPos?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPlayerFilterInput | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelIDInput | null,
  profileId?: ModelStringInput | null,
  score?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  pricingPlan?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  pseudo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelConversationConditionInput = {
  and?: Array< ModelConversationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelConversationConditionInput | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateConversationInput = {
  id?: string | null,
  partyId?: string | null,
};

export type ModelConversationUserConditionInput = {
  and?: Array< ModelConversationUserConditionInput | null > | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelConversationUserConditionInput | null,
  or?: Array< ModelConversationUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateConversationUserInput = {
  conversationId: string,
  id?: string | null,
  userId: string,
};

export type ModelFriendRequestConditionInput = {
  and?: Array< ModelFriendRequestConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  friendUsername?: ModelStringInput | null,
  not?: ModelFriendRequestConditionInput | null,
  or?: Array< ModelFriendRequestConditionInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelFriendRequestStatusInput | null,
  updatedAt?: ModelStringInput | null,
  userUsername?: ModelStringInput | null,
};

export type CreateFriendRequestInput = {
  friendUsername: string,
  requestId: string,
  status?: FriendRequestStatus | null,
  userUsername: string,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  content?: ModelStringInput | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMessageConditionInput | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateMessageInput = {
  content: string,
  conversationId: string,
  id?: string | null,
  userId: string,
};

export type ModelPartyConditionInput = {
  and?: Array< ModelPartyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPartyConditionInput | null,
  or?: Array< ModelPartyConditionInput | null > | null,
  owner?: ModelStringInput | null,
  scores?: ModelStringInput | null,
  status?: ModelPartyStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePartyInput = {
  id?: string | null,
  scores?: string | null,
  status?: PartyStatus | null,
};

export type ModelPlayerConditionInput = {
  and?: Array< ModelPlayerConditionInput | null > | null,
  charPos?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPlayerConditionInput | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelIDInput | null,
  profileId?: ModelStringInput | null,
  score?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePlayerInput = {
  charPos?: number | null,
  id?: string | null,
  partyId: string,
  profileId: string,
  score: number,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  pricingPlan?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  pseudo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  pricingPlan?: string | null,
  profileOwner: string,
  profilePicture?: string | null,
  pseudo: string,
  userId: string,
};

export type DeleteConversationInput = {
  id: string,
};

export type DeleteConversationUserInput = {
  id: string,
};

export type DeleteFriendRequestInput = {
  requestId: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type DeletePartyInput = {
  id: string,
};

export type DeletePlayerInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  userId: string,
};

export type UpdateConversationInput = {
  id: string,
  partyId?: string | null,
};

export type UpdateConversationUserInput = {
  conversationId?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdateFriendRequestInput = {
  friendUsername?: string | null,
  requestId: string,
  status?: FriendRequestStatus | null,
  userUsername?: string | null,
};

export type UpdateMessageInput = {
  content?: string | null,
  conversationId?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdatePartyInput = {
  id: string,
  scores?: string | null,
  status?: PartyStatus | null,
};

export type UpdatePlayerInput = {
  charPos?: number | null,
  id: string,
  partyId?: string | null,
  profileId?: string | null,
  score?: number | null,
};

export type UpdateUserProfileInput = {
  pricingPlan?: string | null,
  profileOwner?: string | null,
  profilePicture?: string | null,
  pseudo?: string | null,
  userId: string,
};

export type ModelSubscriptionConversationFilterInput = {
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionConversationUserFilterInput = {
  and?: Array< ModelSubscriptionConversationUserFilterInput | null > | null,
  conversationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionConversationUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFriendRequestFilterInput = {
  and?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  friendUsername?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  requestId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userUsername?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  conversationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPartyFilterInput = {
  and?: Array< ModelSubscriptionPartyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPartyFilterInput | null > | null,
  owner?: ModelStringInput | null,
  scores?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  charPos?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  owner?: ModelStringInput | null,
  partyId?: ModelSubscriptionIDInput | null,
  profileId?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  pricingPlan?: ModelSubscriptionStringInput | null,
  profileOwner?: ModelStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  pseudo?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetConversationUserQueryVariables = {
  id: string,
};

export type GetConversationUserQuery = {
  getConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type GetFriendRequestQueryVariables = {
  requestId: string,
};

export type GetFriendRequestQuery = {
  getFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type GetPartyQueryVariables = {
  id: string,
};

export type GetPartyQuery = {
  getParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  userId: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type ListConversationUsersQueryVariables = {
  filter?: ModelConversationUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationUsersQuery = {
  listConversationUsers?:  {
    __typename: "ModelConversationUserConnection",
    items:  Array< {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  requestId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFriendRequestsQuery = {
  listFriendRequests?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      createdAt: string,
      friendUsername: string,
      owner?: string | null,
      requestId: string,
      status?: FriendRequestStatus | null,
      updatedAt: string,
      userUsername: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      content: string,
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPartiesQueryVariables = {
  filter?: ModelPartyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartiesQuery = {
  listParties?:  {
    __typename: "ModelPartyConnection",
    items:  Array< {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      charPos?: number | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId: string,
      profileId: string,
      score: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileByProfileOwnerQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  profileOwner: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfileByProfileOwnerQuery = {
  listUserProfileByProfileOwner?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddUserToGroupMutationVariables = {
  groupName: string,
  userId: string,
};

export type AddUserToGroupMutation = {
  addUserToGroup?: string | null,
};

export type CreateConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: CreateConversationInput,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateConversationUserMutationVariables = {
  condition?: ModelConversationUserConditionInput | null,
  input: CreateConversationUserInput,
};

export type CreateConversationUserMutation = {
  createConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateFriendRequestMutationVariables = {
  condition?: ModelFriendRequestConditionInput | null,
  input: CreateFriendRequestInput,
};

export type CreateFriendRequestMutation = {
  createFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type CreatePartyMutationVariables = {
  condition?: ModelPartyConditionInput | null,
  input: CreatePartyInput,
};

export type CreatePartyMutation = {
  createParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  condition?: ModelPlayerConditionInput | null,
  input: CreatePlayerInput,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type DeleteConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: DeleteConversationInput,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteConversationUserMutationVariables = {
  condition?: ModelConversationUserConditionInput | null,
  input: DeleteConversationUserInput,
};

export type DeleteConversationUserMutation = {
  deleteConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteFriendRequestMutationVariables = {
  condition?: ModelFriendRequestConditionInput | null,
  input: DeleteFriendRequestInput,
};

export type DeleteFriendRequestMutation = {
  deleteFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type DeletePartyMutationVariables = {
  condition?: ModelPartyConditionInput | null,
  input: DeletePartyInput,
};

export type DeletePartyMutation = {
  deleteParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  condition?: ModelPlayerConditionInput | null,
  input: DeletePlayerInput,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type UpdateConversationMutationVariables = {
  condition?: ModelConversationConditionInput | null,
  input: UpdateConversationInput,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateConversationUserMutationVariables = {
  condition?: ModelConversationUserConditionInput | null,
  input: UpdateConversationUserInput,
};

export type UpdateConversationUserMutation = {
  updateConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateFriendRequestMutationVariables = {
  condition?: ModelFriendRequestConditionInput | null,
  input: UpdateFriendRequestInput,
};

export type UpdateFriendRequestMutation = {
  updateFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type UpdatePartyMutationVariables = {
  condition?: ModelPartyConditionInput | null,
  input: UpdatePartyInput,
};

export type UpdatePartyMutation = {
  updateParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  condition?: ModelPlayerConditionInput | null,
  input: UpdatePlayerInput,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnCreateConversationUserSubscription = {
  onCreateConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnCreateFriendRequestSubscription = {
  onCreateFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnCreatePartySubscriptionVariables = {
  filter?: ModelSubscriptionPartyFilterInput | null,
};

export type OnCreatePartySubscription = {
  onCreateParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnDeleteConversationUserSubscription = {
  onDeleteConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnDeleteFriendRequestSubscription = {
  onDeleteFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnDeletePartySubscriptionVariables = {
  filter?: ModelSubscriptionPartyFilterInput | null,
};

export type OnDeletePartySubscription = {
  onDeleteParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateConversationUserSubscriptionVariables = {
  filter?: ModelSubscriptionConversationUserFilterInput | null,
};

export type OnUpdateConversationUserSubscription = {
  onUpdateConversationUser?:  {
    __typename: "ConversationUser",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnUpdateFriendRequestSubscription = {
  onUpdateFriendRequest?:  {
    __typename: "FriendRequest",
    createdAt: string,
    friend?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    friendUsername: string,
    owner?: string | null,
    requestId: string,
    status?: FriendRequestStatus | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
    userUsername: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    content: string,
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    conversationId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "ConversationUser",
      conversationId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnUpdatePartySubscriptionVariables = {
  filter?: ModelSubscriptionPartyFilterInput | null,
};

export type OnUpdatePartySubscription = {
  onUpdateParty?:  {
    __typename: "Party",
    conversation?:  {
      __typename: "Conversation",
      createdAt: string,
      id: string,
      owner?: string | null,
      partyId?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    scores?: string | null,
    status?: PartyStatus | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    charPos?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    party?:  {
      __typename: "Party",
      createdAt: string,
      id: string,
      owner?: string | null,
      scores?: string | null,
      status?: PartyStatus | null,
      updatedAt: string,
    } | null,
    partyId: string,
    profileId: string,
    score: number,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      createdAt: string,
      pricingPlan?: string | null,
      profileOwner: string,
      profilePicture?: string | null,
      pseudo: string,
      updatedAt: string,
      userId: string,
    } | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
    } | null,
    conversationUsers?:  {
      __typename: "ModelConversationUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    incomingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    outgoingFriendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    pricingPlan?: string | null,
    profileOwner: string,
    profilePicture?: string | null,
    pseudo: string,
    updatedAt: string,
    userId: string,
  } | null,
};
