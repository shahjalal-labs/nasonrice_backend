import express from 'express';
import { ckControllers } from "./ck.controller";

const router = express.Router();

router.post('/', ckControllers.createCk);
router.get('/', ckControllers.getAllCks);
router.get('/:id', ckControllers.getCkById);
router.patch('/:id', ckControllers.updateCk);
router.delete('/:id', ckControllers.deleteCk);

export const ckRoutes = router;
  