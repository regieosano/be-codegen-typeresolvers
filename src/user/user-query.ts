import { prisma } from "../server";
import { QueryResolvers } from "../_generated/graphql";

export const usersQueryResolver: QueryResolvers["getUsers"] = async () => {
  const users = await prisma.user.findMany();
  if (!users) {
    throw new Error("No users found");
  }
  return users;
};

export const userQueryResolver: QueryResolvers["getUser"] = async (
  _,
  { id }: any
) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, name: true, password: true },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
