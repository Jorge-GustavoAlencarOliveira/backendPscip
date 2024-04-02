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
import { UptadeProjectController } from './controllers/project/UptadeProjectController';
import { UpdateEdificacaoController } from './controllers/project/UpdateEdificacaoController';
import { UptadeRiscosEspeciaisController } from './controllers/project/UpdateRiscosEspeciaisController';
import { UptadeNivelRiscoController } from './controllers/project/UpdateNivelRiscoController';
import { UptadeMedidadeSegurancaController } from './controllers/project/UpdateMedidasSegurancaController';
import { UpdateGerenciamentoController } from './controllers/project/UpdateGerenciamentoController';
import { UpdateDimensionamentoController } from './controllers/project/UpdateDimensionamentoController';

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

// update informações
router.put('/project/informacoes', isAuthenticated, new UptadeProjectController().handle)
// update edificacao
router.put('/project/edificacao', isAuthenticated, new UpdateEdificacaoController().handle)
// update Riscos Especiasi
router.put('/project/riscosespeciais', isAuthenticated, new UptadeRiscosEspeciaisController().handle)
// update Nível de Risco
router.put('/project/nivelrisco', isAuthenticated, new UptadeNivelRiscoController().handle)
// update Medidas de Segurança
router.put('/project/medidasseguranca', isAuthenticated, new UptadeMedidadeSegurancaController().handle)
//update Gerenciamento 
router.put('/project/gerenciamento', isAuthenticated, new UpdateGerenciamentoController().handle)
//update Dimensionamento
router.put('/project/dimensionamento', isAuthenticated, new UpdateDimensionamentoController().handle)


export { router };
