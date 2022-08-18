export const UserType = `
type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }
`;

export const UserCreate = `
  createUser(
    name: String!
    email: String!
    password: String!
  ): User
`;

export const LogInUser = `
  loginUser(
    email: String!
    password: String!
  ): Auth
`;

export const UpdateUser = `
  updateUser(
    id: Int!
    name: String
    email: String 
    password: String
  ): User 
`;

export const DeleteUser = `
  deleteUser(id: Int!): User 
`;
