/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateConversation = /* GraphQL */ `subscription OnCreateConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onCreateConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationSubscriptionVariables,
  APITypes.OnCreateConversationSubscription
>;
export const onCreateConversationUser = /* GraphQL */ `subscription OnCreateConversationUser(
  $filter: ModelSubscriptionConversationUserFilterInput
) {
  onCreateConversationUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationUserSubscriptionVariables,
  APITypes.OnCreateConversationUserSubscription
>;
export const onCreateFriendRequest = /* GraphQL */ `subscription OnCreateFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onCreateFriendRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFriendRequestSubscriptionVariables,
  APITypes.OnCreateFriendRequestSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateParty = /* GraphQL */ `subscription OnCreateParty($filter: ModelSubscriptionPartyFilterInput) {
  onCreateParty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePartySubscriptionVariables,
  APITypes.OnCreatePartySubscription
>;
export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onCreatePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteConversation = /* GraphQL */ `subscription OnDeleteConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onDeleteConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationSubscriptionVariables,
  APITypes.OnDeleteConversationSubscription
>;
export const onDeleteConversationUser = /* GraphQL */ `subscription OnDeleteConversationUser(
  $filter: ModelSubscriptionConversationUserFilterInput
) {
  onDeleteConversationUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationUserSubscriptionVariables,
  APITypes.OnDeleteConversationUserSubscription
>;
export const onDeleteFriendRequest = /* GraphQL */ `subscription OnDeleteFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onDeleteFriendRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFriendRequestSubscriptionVariables,
  APITypes.OnDeleteFriendRequestSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onDeleteParty = /* GraphQL */ `subscription OnDeleteParty($filter: ModelSubscriptionPartyFilterInput) {
  onDeleteParty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePartySubscriptionVariables,
  APITypes.OnDeletePartySubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onDeletePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateConversation = /* GraphQL */ `subscription OnUpdateConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onUpdateConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationSubscriptionVariables,
  APITypes.OnUpdateConversationSubscription
>;
export const onUpdateConversationUser = /* GraphQL */ `subscription OnUpdateConversationUser(
  $filter: ModelSubscriptionConversationUserFilterInput
) {
  onUpdateConversationUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationUserSubscriptionVariables,
  APITypes.OnUpdateConversationUserSubscription
>;
export const onUpdateFriendRequest = /* GraphQL */ `subscription OnUpdateFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onUpdateFriendRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFriendRequestSubscriptionVariables,
  APITypes.OnUpdateFriendRequestSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onUpdateParty = /* GraphQL */ `subscription OnUpdateParty($filter: ModelSubscriptionPartyFilterInput) {
  onUpdateParty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePartySubscriptionVariables,
  APITypes.OnUpdatePartySubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onUpdatePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
