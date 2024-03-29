import AppError from "../../errors/app.error";
import { IRolesById } from "../../interfaces/roles";
import { prisma } from "../../utils/prisma";

const deleteRoleService = async ({ id }: IRolesById) => {
  const findRoleByName = await prisma.roles.findUnique({
    where: {
      id: id,
    },
  });
  if (!findRoleByName) {
    throw new AppError(`Role does not exists`);
  }

  const roleDelete = await prisma.roles.delete({
    where: {
      id: id,
    },
  });

  return roleDelete;
};

export default deleteRoleService;
