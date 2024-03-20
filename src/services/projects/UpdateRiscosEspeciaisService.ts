import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

interface RiscosEspeciaisProps {
  id: string,
  user_id: string,
  riscosEspeciais: Prisma.JsonArray
}

export class UpdateRiscosEspeciaisService{
  async execute({user_id, id, riscosEspeciais}: RiscosEspeciaisProps){
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
        riscosEspeciais: riscosEspeciais
      }
    })

    return updatedProject
}
}