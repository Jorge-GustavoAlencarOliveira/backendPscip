import prismaClient from '../../prisma';
import { Prisma } from '@prisma/client';

interface ProjectProps{
  name: string;
  user_id: string;
  id: string;
  dados: Prisma.JsonObject;
  edificacao: Prisma.JsonArray
}

class UptadeProjectService{
  async execute({id, user_id, name, dados, edificacao}:ProjectProps){
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
        name: name,
        dados: dados,
        edificacao: edificacao,
      },
      select:{
        id: true,
        dados: true,
        edificacao: true
      }
    })
    return uptadeProject
  }
}

export {UptadeProjectService}