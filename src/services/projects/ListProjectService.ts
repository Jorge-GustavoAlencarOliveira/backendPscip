import prismaClient from '../../prisma';

interface projectRequest {
  user_id: string;
  status: string
}

class ListProjectService {
  async execute({ user_id, status }: projectRequest) {
    const project = await prismaClient.project.findMany({
      where: {
        user_id: user_id,
        status: status === 'true' ? true : false
      },
      select:{
        id: true,
        status: true,
        dados: true,
        created_at: true
      }
    });

    return project;
  }
}

export { ListProjectService };
