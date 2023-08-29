import { Request, Response } from "express";
import { ListProjectService } from "../../services/projects/ListProjectService";

class ListProjectController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id
    const status = req.query.status as string
    const listProjectService = new ListProjectService()
    const projectlist = await listProjectService.execute({
      user_id,
      status
    })
    return res.json(projectlist)
  }
}

export {ListProjectController}