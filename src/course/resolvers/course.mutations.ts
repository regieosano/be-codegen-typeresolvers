import { prisma } from "../../server";
import { MutationResolvers } from "../../_generated/graphql";

export const courseCreateResolver: MutationResolvers["createCourse"] = async (
  _: any,
  args: {
    title: string;
    description: string;
  }
) => {
  const course = await prisma.course.findUnique({
    where: { title: args.title },
  });

  if (course) {
    throw new Error(`Course with title: ${args.title} already exists`);
  }

  const newCourse = await prisma.course.create({
    data: {
      title: args.title,
      description: args.description,
    },
  });
  return newCourse;
};

export const courseUpdateResolver: MutationResolvers["updateCourse"] = async (
  _: any,
  args: { id: string; title?: string; description?: string }
) => {
  const course = await prisma.course.findUnique({ where: { id: args.id } });
  if (!course) {
    throw new Error(`No course found for id: ${args.id}`);
  }
  if (args.title) {
    const courseTitle = await prisma.course.findUnique({
      where: { title: args.title },
    });
    if (courseTitle) {
      throw new Error(`Course with title: ${args.title} already exists`);
    }
  }
  const updatedCourse = await prisma.course.update({
    where: { id: args.id },
    data: {
      title: args.title,
      description: args.description,
    },
  });
  return updatedCourse;
};

export const courseDeleteResolver: MutationResolvers["deleteCourse"] = async (
  _: any,
  args: { id: string }
) => {
  const course = await prisma.course.findUnique({ where: { id: args.id } });
  if (!course) {
    throw new Error(`No course found for id: ${args.id}`);
  }
  const deletedCourse = await prisma.course.delete({ where: { id: args.id } });
  return deletedCourse;
};
