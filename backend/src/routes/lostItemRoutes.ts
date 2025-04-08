import express from 'express';
import * as LostItemController from '../controllers/lostItemController';

const router = express.Router();

router.get('/', LostItemController.getLostItems);
router.get('/:id', LostItemController.getLostItem);
router.post('/', LostItemController.postLostItem);
router.put('/:id', LostItemController.putLostItem);
router.delete('/:id', LostItemController.deleteLostItem);

export default router;