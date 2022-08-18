import { prisma } from "../server";
import { QueryResolvers } from "../_generated/graphql";

export const coursesQueryResolver: QueryResolvers["getCourses"] = async () => {
  const courses = await prisma.course.findMany();
  if (!courses) {
    throw new Error("No courses found");
  }
  return courses;
};

export const courseQueryResolver: QueryResolvers["getCourse"] = async (
  _,
  { id }: any
) => {
  const course = await prisma.course.findUnique({
    where: { id },
    select: { id: true, title: true, description: true },
  });
  if (!course) {
    throw new Error("Course not found");
  }
  return course;
};
