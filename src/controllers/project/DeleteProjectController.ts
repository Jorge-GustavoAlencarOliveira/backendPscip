import { Request, Response, json } from "express";
import { DeleteProjectService } from "../../services/projects/DeleteProjectService";

class DeleteProjectController {
  async handle(req: Request, res: Response){
    const user_id = req.user_id
    const id = req.query.id as string
    const deleteProjectService = new DeleteProjectService()
    const project = await deleteProjectService.execute({
      id,
      user_id
    })
    return res.json(project)
  }
}

export {DeleteProjectController}