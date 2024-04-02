import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

type ProjectProps = {
  user_id: string,
  id: string,
  gerenciamento: Prisma.JsonObject
}

export class UpdateGerenciamentoService {
  async execute({user_id, id, gerenciamento}: ProjectProps){
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
        gerenciamento: gerenciamento
      }
    })

    return updatedProject
  }
} 