import { Request, Response } from 'express';
import { CountProjectService } from '../../services/projects/CountProjectService';

class CountProjectController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const createProjectService = new CountProjectService();
    const project = await createProjectService.execute({
      user_id,
    });
    return res.json(project);
  }
}

export { CountProjectController };
