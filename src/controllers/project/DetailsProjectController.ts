import { Response, Request } from "express";
import { DetailsProjectService } from "../../services/projects/DetailsProjectService";

class DetailsProjectController {
  async handle (req: Request, res: Response){
    const id = req.query.id as string;
    const user_id = req.user_id;
    const detailsProjectService = new DetailsProjectService();
    const project = await detailsProjectService.execute({
      id,
      user_id
    })
    return res.json(project)
  }
}

export {DetailsProjectController}