import * as bcrypt from "bcrypt";
import { prisma } from "../../server";
import { MutationResolvers } from "../../_generated/graphql";

type courseEnrolled = {
  id: string;
  title: string;
  description: string;
};

export const studentCreateResolver: MutationResolvers["createStudent"] = async (
  _: any,
  args: {
    id: string;
    name: string;
    age: number;
    email: string;
    address: string;
    guardian: string;
    password: string;
    course: courseEnrolled;
  }
) => {
  const student = await prisma.student.findUnique({
    where: {
      email: args.email,
    },
  });
  if (student) {
    throw new Error(`Student with email: ${args.email} already exists`);
  }

  const hashedPassword = await bcrypt.hash(args.password, 10);
  const newStudent = await prisma.student.create({
    data: {
      id: args.id,
      name: args.name,
      age: args.age,
      email: args.email,
      address: args.address,
      guardian: args.guardian,
      password: hashedPassword,
      course: {
        connect: {
          id: args.course.id,
        },
      },
    },
    include: {
      course: true,
    },
  });
  return newStudent;
};

export const studentUpdateResolver: MutationResolvers["updateStudent"] = async (
  _: any,
  args: {
    id: string;
    name?: string;
    age?: number;
    email?: string;
    address?: string;
    guardian?: string;
    password?: string;
    course?: object;
  }
) => {
  const student = await prisma.student.findUnique({ where: { id: args.id } });
  if (!student) {
    throw new Error(`No student found for id: ${args.id}`);
  }
  let hashedPassword = student.password;
  if (args.password) {
    hashedPassword = await bcrypt.hash(args.password, 10);
  }
  if (args.email) {
    const studentUpdatedEmail = await prisma.user.findUnique({
      where: { email: args.email },
    });
    if (studentUpdatedEmail) {
      throw new Error(`Student with email: ${args.email} already exists`);
    }
  }
  const updatedStudent = await prisma.student.update({
    where: { id: args.id },
    data: {
      name: args.name,
      age: args.age,
      email: args.email,
      address: args.address,
      guardian: args.guardian,
      password: hashedPassword,
      course: args.course,
    },
  });
  return updatedStudent;
};

export const studentDeleteResolver: MutationResolvers["deleteStudent"] = async (
  _: any,
  args: { id: string }
) => {
  const student = await prisma.student.findUnique({ where: { id: args.id } });
  if (!student) {
    throw new Error(`No student found for id: ${args.id}`);
  }
  const deletedStudent = await prisma.student.delete({
    where: { id: args.id },
  });
  return deletedStudent;
};
