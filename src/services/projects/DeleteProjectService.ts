import prismaClient from "../../prisma";

interface ProjectProps{
  id: string;
  user_id: string
}

class DeleteProjectService {
  async execute ({id, user_id}:ProjectProps){
    await prismaClient.project.delete({
      where: {
        id: id,
        user_id: user_id
      }
    })
    return ({message: 'Projeto deletado com sucesso'})
  }
}

export {DeleteProjectService}