import { Response, Request } from "express";
import { UptadeUserService } from "../../services/user/UptadeUserService";

class UptadeUserController {
  async handle(req: Request, res:Response){
    const {name, email, password, cpf} = req.body
    const user_id = req.user_id
    const uptadeUserService = new UptadeUserService()
    const userUpdate = await uptadeUserService.execute({
      name,
      email,
      password,
      cpf,
      user_id
    })

    return res.json(userUpdate)
  }
}

export {UptadeUserController}