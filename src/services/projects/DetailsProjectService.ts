import prismaClient from "../../prisma";

interface ProjectProps{
  user_id: string;
  id: string
}

class DetailsProjectService {
  async execute({user_id, id}:ProjectProps){
    const project = await prismaClient.project.findFirst({
      where: {
        id: id,
        user_id: user_id
      },
      select: {
        id: true,
        dados: true,
        edificacao: true,
        riscosEspeciais: true,
        medidasSeguranca: true,
        niveldeRisco: true
      }
    })
    return project
  }
}

export {DetailsProjectService}