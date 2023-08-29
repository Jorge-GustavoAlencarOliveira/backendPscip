import prismaClient from '../../prisma';
import { Prisma } from '@prisma/client';
interface projectRequest {
  name: string;
  user_id: string;
  dados: Prisma.JsonObject;
  edificacao: Prisma.JsonArray
}

class CreateProjectService {
  async execute({ name, user_id, dados, edificacao }: projectRequest) {
    if (!name) {
      throw new Error('Error');
    }
    const numberProjects = await prismaClient.project.count({
      where: {
        user_id: user_id,
      },
    });

    const userSubscriptions = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        subscriptions: true,
      },
    });

    if (
      userSubscriptions?.subscriptions?.status !== 'active' &&
      numberProjects >= 3
    ) {
      throw new Error('não autorizado');
    }

    const project = await prismaClient.project.create({
      data: {
        name: name,
        user_id: user_id,
        dados: dados,
        edificacao: edificacao
      },
      select: {
        id: true,
        name: true,
        status: true,
        dados: true,
        edificacao: true
      },
    });
    return project;
  }
}

export { CreateProjectService };
