import { Request, Response } from "express";
import { CreateProjectService } from "../../services/projects/CreateProjectService";

class CreateProjectController{
  async handle(req: Request, res: Response){
    const {name, dados, edificacao} = req.body
    const user_id = req.user_id
    const createProjectService = new CreateProjectService();
    const project = await createProjectService.execute({
      name,
      user_id,
      dados,
      edificacao
    })
    return res.json(project)
  }
}

export {CreateProjectController}