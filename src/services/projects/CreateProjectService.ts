import prismaClient from '../../prisma';

interface projectRequest {
  user_id: string;
  // dados: Prisma.JsonObject;
}

class CreateProjectService {
  async execute({user_id}: projectRequest) {
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

    // if (
    //   userSubscriptions?.subscriptions?.status !== 'active' &&
    //   numberProjects >= 3
    // ) {
    //   throw new Error('não autorizado');
    // }

    const project = await prismaClient.project.create({
      data: {
        user_id: user_id,
        // dados: dados
      },
      select: {
        id: true,
        status: true,
        // dados: true,
      },
    });
    return project;
  }
}

export { CreateProjectService };
