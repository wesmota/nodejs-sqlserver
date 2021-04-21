import {Router} from 'express';
const router = Router();

import {listarFormulario, obterFormulario, criarFormulario} from '../controller/formulario.controller';
import { validateFormularioPayload } from '../entity/validator';

router.get('/api/v1/formularios/formulario', listarFormulario);
router.get('/api/v1/formularios/formulario/:id', obterFormulario);
router.post('/api/v1/formularios/formulario/',  validateFormularioPayload, criarFormulario);
/*router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);*/
export default router;