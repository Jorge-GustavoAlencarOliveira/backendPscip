import prismaClient from '../../prisma';

interface projectRequest {
  id: string;
  user_id: string;
}

class FinishProjectService {
  async execute({ id, user_id }: projectRequest) {
    try{
      const projectFinish = await prismaClient.project.update({
        where: {
          id: id,
          user_id: user_id
        },
        data: {
          status: true,
        },
        select: {
          name: true,
          id: true,
          status: true,
        },
      });
      return projectFinish;
    }catch(err){
      throw new Error('err')
    }   
  }
}

export { FinishProjectService };
