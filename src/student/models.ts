import { Student } from "@prisma/client";
import { Course } from "@prisma/client";

// type CourseEnrolled = {
//   title: string;
//   description: string;
// };

export type ResolvedStudent = Student;
export type ResolvedCourseEnrolled = Course;
