import { Router} from 'express';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UptadeUserController } from './controllers/user/UptadeUserController';
import { CreateProjectController } from './controllers/project/CreateProjectController';
import { FinishProjectController } from './controllers/project/FinishProjectController';
import { ListProjectController } from './controllers/project/ListProjectController';
import { CountProjectController } from './controllers/project/CountProjectController';
import { DetailsProjectController } from './controllers/project/DetailsProjectController';
import { DeleteProjectController } from './controllers/project/DeleteProjectController';
const router = Router();

// Rotas User //
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/uptadeuser', isAuthenticated, new UptadeUserController().handle)

//Rotas Project
router.post('/project', isAuthenticated, new CreateProjectController().handle)
router.put('/project', isAuthenticated, new FinishProjectController().handle)
router.get('/projects', isAuthenticated, new ListProjectController().handle)
router.get('/projects/count', isAuthenticated, new CountProjectController().handle)
router.get('/project/details', isAuthenticated, new DetailsProjectController().handle)
router.delete('/project', isAuthenticated, new DeleteProjectController().handle)


export { router };
