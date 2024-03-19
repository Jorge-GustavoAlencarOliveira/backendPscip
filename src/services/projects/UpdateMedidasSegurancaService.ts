import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

interface projectProps {
  id: string,
  user_id: string,
  medidasSeguranca: Prisma.JsonArray
}

export class UpdateMedidadeSegurancaService{
  async execute({user_id, id, medidasSeguranca}: projectProps){
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
        medidasSeguranca: medidasSeguranca
      }
    })

    return updatedProject
}
}