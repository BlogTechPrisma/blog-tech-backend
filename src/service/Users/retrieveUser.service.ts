import AppError from "../../errors/app.error";
import { IUserById } from "../../interfaces/users";
import { prisma } from "../../utils/prisma";

const retrieveUserService = async ({ id }: IUserById) => {
  const userExists = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });

  if (!userExists) {
    throw new AppError("User does not exists");
  }

  return userExists;
};

export default retrieveUserService;
