import { gql } from "apollo-server";

import {
  UserType,
  UserCreate,
  LogInUser,
  UpdateUser,
  DeleteUser,
} from "../user/graphql/user-gql";

import { AuthType } from "../authentication/graphql/auth-gql";

import {
  StudentType,
  StudentCreate,
  StudentUpdate,
  StudentDelete,
} from "../student/graphql/student-gql";

import {
  CourseType,
  CourseEnrolled,
  CourseCreate,
  CourseUpdate,
  CourseDelete,
} from "../course/graphql/course-gql";

import { AllQueriesGQL } from "./queries-graph";

export const typeDefs = gql`

  ${AllQueriesGQL}

  ${AuthType} 

  ${UserType}

  ${StudentType}

  ${CourseType}

  ${CourseEnrolled}

  type Mutation {
    
    ${UserCreate}
    
    ${LogInUser}

    ${UpdateUser}

    ${DeleteUser}

    ${CourseCreate}

    ${CourseUpdate}

    ${CourseDelete}

    ${StudentCreate}

    ${StudentUpdate}

    ${StudentDelete}

  }
`;
