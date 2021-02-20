/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFixture = /* GraphQL */ `
  query GetFixture($id: ID!) {
    getFixture(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFixtures = /* GraphQL */ `
  query ListFixtures(
    $filter: ModelFixtureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFixtures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
