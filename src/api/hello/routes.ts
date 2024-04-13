import { controller } from '@middlewares/controller.middleware';
import { dtoValidation } from '@middlewares/dto-validation.middleware';
import { Router } from 'express';
import { HelloDtoParamsDto } from './dtos/hello.dto';
import { TestValidationBodyDto, TestValidationParamsDto } from './dtos/test-validation.dto';
import { helloService } from './services/hello/hello.service';
import { testValidationService } from './services/test-validation.service';

const router = Router();

router.get('/message/:message', dtoValidation({ params: HelloDtoParamsDto }), controller(helloService));
router.post(
  '/test-validation/message/:message',
  dtoValidation({ body: TestValidationBodyDto, params: TestValidationParamsDto }),
  controller(testValidationService),
);

export default router;
