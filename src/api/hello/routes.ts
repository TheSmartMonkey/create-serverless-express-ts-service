import { controller } from '@middlewares/controller.middleware';
import { controllerV2 } from '@middlewares/controllerv2.middleware';
import { dtoValidation } from '@middlewares/dto-validation.middleware';
import { dtoValidationV2 } from '@middlewares/dto-validationv2.middleware';
import { Router } from 'express';
import { HelloDto } from './dtos/hello.dto';
import { TestValidationBodyDto, TestValidationParamsDto } from './dtos/test-validation.dto';
import { helloService } from './services/hello/hello.service';
import { testValidationService } from './services/test-validation.service';

const router = Router();

router.get('/message/:message', dtoValidation(HelloDto), controller(helloService));
router.post(
  '/test-validation/message/:message',
  dtoValidationV2({ body: TestValidationBodyDto, params: TestValidationParamsDto }),
  controllerV2(testValidationService),
);

export default router;
