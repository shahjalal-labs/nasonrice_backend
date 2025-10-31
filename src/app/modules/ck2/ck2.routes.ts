import express from 'express';
import { ck2Controllers } from "./ck2.controller";

const router = express.Router();

router.post('/', ck2Controllers.createCk2);
router.get('/', ck2Controllers.getAllCk2s);
router.get('/:id', ck2Controllers.getCk2ById);
router.patch('/:id', ck2Controllers.updateCk2);
router.delete('/:id', ck2Controllers.deleteCk2);

export const ck2Routes = router;
  