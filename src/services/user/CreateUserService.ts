import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
  name: string;
  email: string;
  password: string;
  cpf: string
}

class CreateUserService{
  async execute({name, email, password, cpf}: UserRequest){
    if(name === '' || !name || email === '' || !email || !password || password === '' ){
      throw new Error("Email não é válido")
    }
    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    if(userAlreadyExist){
      throw new Error("O usuário já existe")
    }
    const passwordHash = await hash(password, 8);
    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash,
        cpf: cpf
      },
      select:{
        name: true,
        email: true,
        cpf: true
      }
    })
    return user
  }
}

export {CreateUserService}