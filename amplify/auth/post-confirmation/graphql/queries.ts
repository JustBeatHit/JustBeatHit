/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getConversation = /* GraphQL */ `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    owner
    party {
      createdAt
      id
      owner
      scores
      status
      updatedAt
      __typename
    }
    partyId
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationQueryVariables,
  APITypes.GetConversationQuery
>;
export const getConversationUser = /* GraphQL */ `query GetConversationUser($id: ID!) {
  getConversationUser(id: $id) {
    conversation {
      createdAt
      id
      owner
      partyId
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    owner
    updatedAt
    user {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationUserQueryVariables,
  APITypes.GetConversationUserQuery
>;
export const getFriendRequest = /* GraphQL */ `query GetFriendRequest($requestId: ID!) {
  getFriendRequest(requestId: $requestId) {
    createdAt
    friend {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    friendUsername
    owner
    requestId
    status
    updatedAt
    user {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    userUsername
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFriendRequestQueryVariables,
  APITypes.GetFriendRequestQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($messageId: ID!) {
  getMessage(messageId: $messageId) {
    content
    conversation {
      createdAt
      id
      owner
      partyId
      updatedAt
      __typename
    }
    conversationId
    createdAt
    messageId
    owner
    sender {
      conversationId
      createdAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const getParty = /* GraphQL */ `query GetParty($id: ID!) {
  getParty(id: $id) {
    conversation {
      createdAt
      id
      owner
      partyId
      updatedAt
      __typename
    }
    createdAt
    id
    owner
    scores
    status
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPartyQueryVariables, APITypes.GetPartyQuery>;
export const getPlayer = /* GraphQL */ `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    charPos
    createdAt
    id
    owner
    party {
      createdAt
      id
      owner
      scores
      status
      updatedAt
      __typename
    }
    partyId
    profileId
    score
    updatedAt
    user {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPlayerQueryVariables, APITypes.GetPlayerQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($userId: String!) {
  getUserProfile(userId: $userId) {
    conversations {
      nextToken
      __typename
    }
    createdAt
    incomingFriendRequests {
      nextToken
      __typename
    }
    outgoingFriendRequests {
      nextToken
      __typename
    }
    partys {
      nextToken
      __typename
    }
    pricingPlan
    profileOwner
    profilePicture
    pseudo
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listConversationUsers = /* GraphQL */ `query ListConversationUsers(
  $filter: ModelConversationUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      conversationId
      createdAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationUsersQueryVariables,
  APITypes.ListConversationUsersQuery
>;
export const listConversations = /* GraphQL */ `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      partyId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationsQueryVariables,
  APITypes.ListConversationsQuery
>;
export const listFriendRequests = /* GraphQL */ `query ListFriendRequests(
  $filter: ModelFriendRequestFilterInput
  $limit: Int
  $nextToken: String
  $requestId: ID
  $sortDirection: ModelSortDirection
) {
  listFriendRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    requestId: $requestId
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      friendUsername
      owner
      requestId
      status
      updatedAt
      userUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFriendRequestsQueryVariables,
  APITypes.ListFriendRequestsQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $messageId: ID
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMessages(
    filter: $filter
    limit: $limit
    messageId: $messageId
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      content
      conversationId
      createdAt
      messageId
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listParties = /* GraphQL */ `query ListParties(
  $filter: ModelPartyFilterInput
  $limit: Int
  $nextToken: String
) {
  listParties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      scores
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPartiesQueryVariables,
  APITypes.ListPartiesQuery
>;
export const listPlayers = /* GraphQL */ `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      charPos
      createdAt
      id
      owner
      partyId
      profileId
      score
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlayersQueryVariables,
  APITypes.ListPlayersQuery
>;
export const listUserProfileByProfileOwner = /* GraphQL */ `query ListUserProfileByProfileOwner(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $profileOwner: String!
  $sortDirection: ModelSortDirection
) {
  listUserProfileByProfileOwner(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    profileOwner: $profileOwner
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileByProfileOwnerQueryVariables,
  APITypes.ListUserProfileByProfileOwnerQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: String
) {
  listUserProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      createdAt
      pricingPlan
      profileOwner
      profilePicture
      pseudo
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
