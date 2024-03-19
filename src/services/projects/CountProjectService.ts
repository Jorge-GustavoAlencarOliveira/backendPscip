import prismaClient from '../../prisma';

interface projectRequest {
  user_id: string;
}

class CountProjectService {
  async execute({ user_id }: projectRequest) {
   
    const numberProjects = await prismaClient.project.count({
      where: {
        user_id: user_id,
        status: true
      },
    });

    
    return numberProjects;
  }
}

export { CountProjectService };