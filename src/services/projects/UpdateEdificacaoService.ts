import { Prisma } from '@prisma/client'
import prismaClient from '../../prisma'

interface projectProps {
  user_id: string,
  id: string,
  edificacao: Prisma.JsonArray
}

export class UpdateEdificacaoService{
  async execute({user_id, id, edificacao}: projectProps){
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
        edificacao: edificacao
      }
    })

    return updatedProject
  }
}