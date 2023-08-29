import prismaClient from "../../prisma";

interface detailUserProps{
  user_id: string
}

class DetailUserService{
  async execute({user_id}:detailUserProps){
    const detailUser = await prismaClient.user.findFirst({
      where:{
        id: user_id
      },
      select:{
        id: true,
        name: true,
        cpf: true,
        endereco: true,
        subscriptions: {
          select: {
            id: true,
            status: true,
            priceId: true
          }
        }
      }
    })
    return detailUser
  }
}

export {DetailUserService}