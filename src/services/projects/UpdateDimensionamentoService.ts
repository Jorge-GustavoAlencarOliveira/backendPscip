import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

type dimensionamentoProps = {
  id: string;
  user_id: string;
  dimensionamento: Prisma.JsonArray
}

export class UpdateDimensionamentoService{
  async execute({id, user_id, dimensionamento}:dimensionamentoProps){
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
       dimensionamento: dimensionamento
      }
    })

    return updatedProject
  }
}