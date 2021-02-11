/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFixture = /* GraphQL */ `
  mutation CreateFixture(
    $input: CreateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    createFixture(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateFixture = /* GraphQL */ `
  mutation UpdateFixture(
    $input: UpdateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    updateFixture(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteFixture = /* GraphQL */ `
  mutation DeleteFixture(
    $input: DeleteFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    deleteFixture(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
