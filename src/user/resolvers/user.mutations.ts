import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { MutationResolvers } from "../../_generated/graphql";

import { prisma } from "../../server";

export const userLoginResolver: MutationResolvers["loginUser"] = async (
  _: any,
  args: { email: string; password: string }
) => {
  const user = await prisma.user.findUnique({
    where: {
      email: args.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });
  if (!user) {
    throw new Error(`No user found for email: ${args.email}`);
  }
  const valid = await bcrypt.compare(args.password, user.password || "");
  if (!valid) {
    throw new Error("Invalid password");
  }
  const jwtSecret = !process.env.JWT_SECRET ? "secret" : process.env.JWT_SECRET;
  const token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: "1h",
  });
  const cookie = `Authorization=${token}; HttpOnly; Max-Age=3600;`;

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    },
    token,
    cookie,
  };
};

export const userCreateResolver: MutationResolvers["createUser"] = async (
  _: any,
  args: { name: string; email: string; password: string }
) => {
  const user = await prisma.user.findUnique({
    where: { email: args.email },
  });
  if (user) {
    throw new Error(`User with email: ${args.email} already exists`);
  }
  const hashedPassword = await bcrypt.hash(args.password, 10);
  const newUser = await prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
      password: hashedPassword,
    },
  });
  return newUser;
};

export const userUpdateResolver: MutationResolvers["updateUser"] = async (
  _: any,
  args: { id: number; name?: string; email?: string; password?: string }
) => {
  const user = await prisma.user.findUnique({ where: { id: args.id } });
  if (!user) {
    throw new Error(`No user found for id: ${args.id}`);
  }
  let hashedPassword = user.password;
  if (args.password) {
    hashedPassword = await bcrypt.hash(args.password, 10);
  }
  if (args.email) {
    const userByEmail = await prisma.user.findUnique({
      where: { email: args.email },
    });
    if (userByEmail) {
      throw new Error(`User with email: ${args.email} already exists`);
    }
  }
  const updatedUser = await prisma.user.update({
    where: { id: args.id },
    data: {
      name: args.name,
      email: args.email,
      password: hashedPassword,
    },
  });
  return updatedUser;
};

export const userDeleteResolver: MutationResolvers["deleteUser"] = async (
  _: any,
  args: { id: number }
) => {
  const user = await prisma.user.findUnique({ where: { id: args.id } });
  if (!user) {
    throw new Error(`No user found for id: ${args.id}`);
  }
  const deletedUser = await prisma.user.delete({ where: { id: args.id } });
  return deletedUser;
};
