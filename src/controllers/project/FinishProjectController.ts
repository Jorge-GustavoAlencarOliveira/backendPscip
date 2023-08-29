import { Request, Response } from "express";
import { FinishProjectService } from "../../services/projects/FinishProjectService";

class FinishProjectController{
  async handle(req: Request, res: Response){
    const {id} = req.body;
    const user_id = req.user_id
    const finishProjectService = new FinishProjectService()
    const projectFinish = await finishProjectService.execute({
      id,
      user_id
    })
    return res.json(projectFinish)
  }
}

export {FinishProjectController}