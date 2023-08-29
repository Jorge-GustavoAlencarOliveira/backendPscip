import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
  name: string;
  email: string;
  password: string;
  cpf: string;
  user_id: string
}



class UptadeUserService{
  async execute({name, email, password, cpf, user_id}:UserRequest){
    try{
      const userAlreadyExist = await prismaClient.user.findFirst({
        where: {
          id: user_id
        }
      })
      if(!userAlreadyExist){
        throw new Error('Usuário não existe')
      }
      const passwordHash = await hash(password, 8);
      const userUptaded = await prismaClient.user.update({
        where:{
          id: user_id
        },
        data: {
          name: name,
          email: email,
          password: passwordHash,
          cpf: cpf
        },
        select:{
          name: true,
          cpf: true,
          email: true
        }
      })
      return userUptaded
    }
    catch(err){
      throw new Error('Erro ao atualizar usuário')
    }
  }
}

export {UptadeUserService}