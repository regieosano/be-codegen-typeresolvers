/* eslint-disable @typescript-eslint/ban-types */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { ResolvedUser } from "../user/models";
import { ResolvedCourse } from "../course/models";
import { ResolvedStudent, ResolvedCourseEnrolled } from "../student/models";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Auth = {
  __typename?: "Auth";
  cookie: Scalars["String"];
  token: Scalars["String"];
  user: User;
};

export type Course = {
  __typename?: "Course";
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type CourseEnrolled = {
  __typename?: "CourseEnrolled";
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCourse?: Maybe<Course>;
  createStudent?: Maybe<Student>;
  createUser?: Maybe<User>;
  deleteCourse?: Maybe<Course>;
  deleteStudent?: Maybe<Student>;
  deleteUser?: Maybe<User>;
  loginUser?: Maybe<Auth>;
  updateCourse?: Maybe<Course>;
  updateStudent?: Maybe<Student>;
  updateUser?: Maybe<User>;
};

export type MutationCreateCourseArgs = {
  description: Scalars["String"];
  title: Scalars["String"];
};

export type MutationCreateStudentArgs = {
  address: Scalars["String"];
  age: Scalars["Int"];
  course: CourseEnrolled;
  createdAt?: InputMaybe<Scalars["Date"]>;
  email: Scalars["String"];
  guardian: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  password: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["Date"]>;
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type MutationDeleteCourseArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteStudentArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Int"];
};

export type MutationLoginUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationUpdateCourseArgs = {
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type MutationUpdateStudentArgs = {
  address: Scalars["String"];
  age: Scalars["Int"];
  course: CourseEnrolled;
  email: Scalars["String"];
  guardian: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  password: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["Date"]>;
};

export type MutationUpdateUserArgs = {
  email: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getCourse: Course;
  getCourses: Array<Course>;
  getStudent: Student;
  getStudents: Array<Student>;
  getStudentsUnderCourse: Array<Student>;
  getStudentsWithAge: Array<Student>;
  getUser: User;
  getUsers: Array<User>;
};

export type Student = {
  __typename?: "Student";
  address: Scalars["String"];
  age: Scalars["Int"];
  course: CourseEnrolled;
  createdAt?: Maybe<Scalars["Date"]>;
  email: Scalars["String"];
  guardian: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  password?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<
    Omit<Auth, "user"> & { user: ResolversTypes["User"] }
  >;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Course: ResolverTypeWrapper<ResolvedCourse>;
  CourseEnrolled: ResolverTypeWrapper<ResolvedCourseEnrolled>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Student: ResolverTypeWrapper<ResolvedStudent>;
  User: ResolverTypeWrapper<ResolvedUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Omit<Auth, "user"> & { user: ResolversParentTypes["User"] };
  Boolean: Scalars["Boolean"];
  Course: ResolvedCourse;
  CourseEnrolled: ResolvedCourseEnrolled;
  Date: Scalars["Date"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Mutation: {};
  Query: {};
  String: Scalars["String"];
  Student: ResolvedStudent;
  User: ResolvedUser;
};

export type AuthResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Auth"] = ResolversParentTypes["Auth"]
> = {
  cookie?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Course"] = ResolversParentTypes["Course"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourseEnrolledResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CourseEnrolled"] = ResolversParentTypes["CourseEnrolled"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createCourse?: Resolver<
    Maybe<ResolversTypes["Course"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCourseArgs, "description" | "title">
  >;
  createStudent?: Resolver<
    Maybe<ResolversTypes["Student"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateStudentArgs,
      | "address"
      | "age"
      | "course"
      | "email"
      | "guardian"
      | "id"
      | "name"
      | "password"
    >
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "email" | "name" | "password">
  >;
  deleteCourse?: Resolver<
    Maybe<ResolversTypes["Course"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCourseArgs, "id">
  >;
  deleteStudent?: Resolver<
    Maybe<ResolversTypes["Student"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteStudentArgs, "id">
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  loginUser?: Resolver<
    Maybe<ResolversTypes["Auth"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, "email" | "password">
  >;
  updateCourse?: Resolver<
    Maybe<ResolversTypes["Course"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCourseArgs, "description" | "id" | "title">
  >;
  updateStudent?: Resolver<
    Maybe<ResolversTypes["Student"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateStudentArgs,
      | "address"
      | "age"
      | "course"
      | "email"
      | "guardian"
      | "id"
      | "name"
      | "password"
    >
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "email" | "id" | "name" | "password">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getCourse?: Resolver<ResolversTypes["Course"], ParentType, ContextType>;
  getCourses?: Resolver<
    Array<ResolversTypes["Course"]>,
    ParentType,
    ContextType
  >;
  getStudent?: Resolver<ResolversTypes["Student"], ParentType, ContextType>;
  getStudents?: Resolver<
    Array<ResolversTypes["Student"]>,
    ParentType,
    ContextType
  >;
  getStudentsUnderCourse?: Resolver<
    Array<ResolversTypes["Student"]>,
    ParentType,
    ContextType
  >;
  getStudentsWithAge?: Resolver<
    Array<ResolversTypes["Student"]>,
    ParentType,
    ContextType
  >;
  getUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  getUsers?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type StudentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Student"] = ResolversParentTypes["Student"]
> = {
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  age?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  course?: Resolver<ResolversTypes["CourseEnrolled"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  guardian?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Auth?: AuthResolvers<ContextType>;
  Course?: CourseResolvers<ContextType>;
  CourseEnrolled?: CourseEnrolledResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
