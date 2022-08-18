export const AllQueriesGQL = `
type Query {
    users: [User]
    user(id: Int!): User
    courses: [Course]
    course(id: String!): Course
    students: [Student]
    student(id: String!): Student
    studentsUnderCourse(id: String!): [Student]
    studentsWithAge(age: Int!): [Student]
  }
`;
