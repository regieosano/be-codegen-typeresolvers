export const CourseType = `
  type Course {
     id: String!
     title: String!
     description: String
   }
 `;

export const CourseEnrolled = `
  input CourseEnrolled {
      id: String!
      title: String!
      description: String
   }
 `;

export const CourseCreate = `
  createCourse(
    title: String!
    description: String
  ): Course
`;

export const CourseUpdate = `
  updateCourse(
    id: ID!
    title: String
    description: String
  ): Course
`;

export const CourseDelete = `
  deleteCourse(
    id: ID!
  ): Course
`;
