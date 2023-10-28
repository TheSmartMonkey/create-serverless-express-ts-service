import { controllerMiddleware } from '@libs/middlewares/controller.middleware';
import { dtoValidationMiddleware } from '@libs/middlewares/dto-validation.middleware';
import { getDataMiddleware } from '@libs/middlewares/get-data.middleware';
import { Router } from 'express';
import { HelloDto } from './dtos/hello.dto';
import { helloService } from './services/hello/hello.service';

const router = Router();

// @ts-ignore
router.get('/:message', getDataMiddleware, dtoValidationMiddleware(HelloDto), controllerMiddleware(helloService));

export default router;
