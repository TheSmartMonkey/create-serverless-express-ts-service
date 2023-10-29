import { controllerMiddleware } from '@libs/middlewares/controller.middleware';
import { dtoValidationMiddleware } from '@libs/middlewares/dto-validation.middleware';
import { Router } from 'express';
import { HelloDto } from './dtos/hello.dto';
import { helloService } from './services/hello/hello.service';

const router = Router();

router.get('/:message', dtoValidationMiddleware(HelloDto), controllerMiddleware(helloService));

export default router;
