import prismaClient from '../../prisma';
import { Prisma } from '@prisma/client';

interface ProjectProps{
  user_id: string;
  id: string;
  dados: Prisma.JsonObject;
  status: boolean
}

class UptadeProjectService{
  async execute({id, user_id, dados, status}:ProjectProps){
    const project = await prismaClient.project.findFirst({
      where: {
        id: id,
        user_id: user_id
      }
    })
    if(!project){
      throw new Error('Projeto não existe')
    }
    const uptadeProject = await prismaClient.project.update({
      where:{
        id: id
      },
      data: {
        dados: dados,
        status: status
      },
      select:{
        id: true,
        dados: true,
        status: true
      }
    })
    return uptadeProject
  }
}

export {UptadeProjectService}