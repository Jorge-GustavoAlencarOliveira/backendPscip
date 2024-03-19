import { Request, Response } from "express";
import { UptadeProjectService } from "../../services/projects/UptadeProjectService";

class UptadeProjectController{
  async handle(req: Request, res: Response){
    const {id, dados, status} = req.body
    const user_id = req.user_id
    const uptadeProjectService = new UptadeProjectService();
    const project = await uptadeProjectService.execute({
      user_id,
      dados,
      id,
      status
    })
    return res.json(project)
  }
}

export {UptadeProjectController}