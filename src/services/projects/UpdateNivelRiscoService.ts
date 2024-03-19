import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

type projectProps = {
  id: string,
  user_id: string,
  nivelRisco: Prisma.JsonObject
}

export class UpdateNivelRiscoService{
  async execute({id, user_id, nivelRisco}: projectProps){
    const project = await prismaClient.project.findFirst({
      where: {
        id: id,
        user_id: user_id
      }
    })
    if(!project){
      throw new Error('Projeto não existe')
    }
    const updatedProject = await prismaClient.project.update({
      where: {
        id: id,
        user_id: user_id
      },
      data: {
        niveldeRisco: nivelRisco
      }
    })

    return updatedProject
  }
}