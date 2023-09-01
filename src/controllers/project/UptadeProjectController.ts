import { Request, Response } from "express";
import { UptadeProjectService } from "../../services/projects/UptadeProjectService";

class UptadeProjectController{
  async handle(req: Request, res: Response){
    const {id, name, dados, edificacao} = req.body
    const user_id = req.user_id
    const uptadeProjectService = new UptadeProjectService();
    const project = await uptadeProjectService.execute({
      name,
      user_id,
      dados,
      edificacao,
      id
    })
    return res.json(project)
  }
}

export {UptadeProjectController}