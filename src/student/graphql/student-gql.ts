export const StudentType = `

 type EnrolledCourse {
    id: String!
    title: String!
    description: String
 }

 type Student {
    id: String!
    name: String!
    age: Int!
    email: String!
    address: String!
    guardian: String!
    password: String
    course: EnrolledCourse!
    createdAt: String
    updatedAt: String
  }
`;

export const StudentCreate = `
    createStudent(
      name: String!
      age: Int!
      email: String!
      address: String!
      guardian: String!
      password: String!
      course: CourseEnrolled!
    ): Student
`;

export const StudentUpdate = `
    updateStudent(
      id: String!
      name: String
      age: Int
      email: String
      address: String
      guardian: String
      password: String
      course: CourseEnrolled
      updatedAt: String
    ): Student 
`;

export const StudentDelete = `
    deleteStudent(id: String!): User 
`;
