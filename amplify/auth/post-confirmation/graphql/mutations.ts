/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addUserToGroup = /* GraphQL */ `mutation AddUserToGroup($groupName: String!, $userId: String!) {
  addUserToGroup(groupName: $groupName, userId: $userId)
}
` as GeneratedMutation<
  APITypes.AddUserToGroupMutationVariables,
  APITypes.AddUserToGroupMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation(
  $condition: ModelConversationConditionInput
  $input: CreateConversationInput!
) {
  createConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const createConversationUser = /* GraphQL */ `mutation CreateConversationUser(
  $condition: ModelConversationUserConditionInput
  $input: CreateConversationUserInput!
) {
  createConversationUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationUserMutationVariables,
  APITypes.CreateConversationUserMutation
>;
export const createFriendRequest = /* GraphQL */ `mutation CreateFriendRequest(
  $condition: ModelFriendRequestConditionInput
  $input: CreateFriendRequestInput!
) {
  createFriendRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateFriendRequestMutationVariables,
  APITypes.CreateFriendRequestMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
    id
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createParty = /* GraphQL */ `mutation CreateParty(
  $condition: ModelPartyConditionInput
  $input: CreatePartyInput!
) {
  createParty(condition: $condition, input: $input) {
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
    players {
      nextToken
      __typename
    }
    scores
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePartyMutationVariables,
  APITypes.CreatePartyMutation
>;
export const createPlayer = /* GraphQL */ `mutation CreatePlayer(
  $condition: ModelPlayerConditionInput
  $input: CreatePlayerInput!
) {
  createPlayer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePlayerMutationVariables,
  APITypes.CreatePlayerMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    Players {
      nextToken
      __typename
    }
    conversationUsers {
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
    pricingPlan
    profileOwner
    profilePicture
    pseudo
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteConversation = /* GraphQL */ `mutation DeleteConversation(
  $condition: ModelConversationConditionInput
  $input: DeleteConversationInput!
) {
  deleteConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationMutationVariables,
  APITypes.DeleteConversationMutation
>;
export const deleteConversationUser = /* GraphQL */ `mutation DeleteConversationUser(
  $condition: ModelConversationUserConditionInput
  $input: DeleteConversationUserInput!
) {
  deleteConversationUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationUserMutationVariables,
  APITypes.DeleteConversationUserMutation
>;
export const deleteFriendRequest = /* GraphQL */ `mutation DeleteFriendRequest(
  $condition: ModelFriendRequestConditionInput
  $input: DeleteFriendRequestInput!
) {
  deleteFriendRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteFriendRequestMutationVariables,
  APITypes.DeleteFriendRequestMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
    id
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deleteParty = /* GraphQL */ `mutation DeleteParty(
  $condition: ModelPartyConditionInput
  $input: DeletePartyInput!
) {
  deleteParty(condition: $condition, input: $input) {
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
    players {
      nextToken
      __typename
    }
    scores
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePartyMutationVariables,
  APITypes.DeletePartyMutation
>;
export const deletePlayer = /* GraphQL */ `mutation DeletePlayer(
  $condition: ModelPlayerConditionInput
  $input: DeletePlayerInput!
) {
  deletePlayer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePlayerMutationVariables,
  APITypes.DeletePlayerMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    Players {
      nextToken
      __typename
    }
    conversationUsers {
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
    pricingPlan
    profileOwner
    profilePicture
    pseudo
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateConversation = /* GraphQL */ `mutation UpdateConversation(
  $condition: ModelConversationConditionInput
  $input: UpdateConversationInput!
) {
  updateConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationMutationVariables,
  APITypes.UpdateConversationMutation
>;
export const updateConversationUser = /* GraphQL */ `mutation UpdateConversationUser(
  $condition: ModelConversationUserConditionInput
  $input: UpdateConversationUserInput!
) {
  updateConversationUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationUserMutationVariables,
  APITypes.UpdateConversationUserMutation
>;
export const updateFriendRequest = /* GraphQL */ `mutation UpdateFriendRequest(
  $condition: ModelFriendRequestConditionInput
  $input: UpdateFriendRequestInput!
) {
  updateFriendRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateFriendRequestMutationVariables,
  APITypes.UpdateFriendRequestMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
    id
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updateParty = /* GraphQL */ `mutation UpdateParty(
  $condition: ModelPartyConditionInput
  $input: UpdatePartyInput!
) {
  updateParty(condition: $condition, input: $input) {
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
    players {
      nextToken
      __typename
    }
    scores
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePartyMutationVariables,
  APITypes.UpdatePartyMutation
>;
export const updatePlayer = /* GraphQL */ `mutation UpdatePlayer(
  $condition: ModelPlayerConditionInput
  $input: UpdatePlayerInput!
) {
  updatePlayer(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePlayerMutationVariables,
  APITypes.UpdatePlayerMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    Players {
      nextToken
      __typename
    }
    conversationUsers {
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
    pricingPlan
    profileOwner
    profilePicture
    pseudo
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
