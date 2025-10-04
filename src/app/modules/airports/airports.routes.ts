import express from 'express';
import { airportsControllers } from "./airports.controller";

const router = express.Router();

router.post('/', airportsControllers.createAirports);
router.get('/', airportsControllers.getAllAirportss);
router.get('/:id', airportsControllers.getAirportsById);
router.patch('/:id', airportsControllers.updateAirports);
router.delete('/:id', airportsControllers.deleteAirports);

export const airportsRoutes = router;
  