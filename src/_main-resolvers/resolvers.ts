import { ResolverTypeWrapper } from "../_generated/graphql";

import { usersQueryResolver, userQueryResolver } from "../user/user-query";

import {
  userLoginResolver,
  userCreateResolver,
  userUpdateResolver,
  userDeleteResolver,
} from "../user/resolvers/user.mutations";

import {
  coursesQueryResolver,
  courseQueryResolver,
} from "../course/course-query";

import {
  courseCreateResolver,
  courseUpdateResolver,
  courseDeleteResolver,
} from "../course/resolvers/course.mutations";

import {
  studentsQueryResolver,
  studentQueryResolver,
  getStudentsUnderCourseResolver,
  getStudentWithAgeResolver,
} from "../student/student-query";

import {
  studentCreateResolver,
  studentUpdateResolver,
  studentDeleteResolver,
} from "../student/resolvers/student.mutations";

export const resolvers: ResolverTypeWrapper<any> = {
  Query: {
    users: usersQueryResolver,
    user: userQueryResolver,
    courses: coursesQueryResolver,
    course: courseQueryResolver,
    students: studentsQueryResolver,
    student: studentQueryResolver,
    studentsUnderCourse: getStudentsUnderCourseResolver,
    studentsWithAge: getStudentWithAgeResolver,
  },
  Mutation: {
    loginUser: userLoginResolver,
    createUser: userCreateResolver,
    updateUser: userUpdateResolver,
    deleteUser: userDeleteResolver,
    createCourse: courseCreateResolver,
    updateCourse: courseUpdateResolver,
    deleteCourse: courseDeleteResolver,
    createStudent: studentCreateResolver,
    updateStudent: studentUpdateResolver,
    deleteStudent: studentDeleteResolver,
  },
};
