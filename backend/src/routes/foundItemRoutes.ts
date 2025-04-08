import express from 'express';
import * as FoundItemController from '../controllers/foundItemController';

const router = express.Router();

router.get('/', FoundItemController.getFoundItems);
router.get('/:id', FoundItemController.getFoundItem);
router.post('/', FoundItemController.postFoundItem);
router.put('/:id', FoundItemController.putFoundItem);
router.delete('/:id', FoundItemController.deleteFoundItem);

export default router;