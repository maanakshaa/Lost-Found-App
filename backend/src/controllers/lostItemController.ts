import { Request, Response } from 'express';
import * as LostItem from '../models/lostItemModel';

export const getLostItems = async (req: Request, res: Response) => {
  try {
    const items = await LostItem.getAllLostItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching lost items' });
  }
};

export const getLostItem = async (req: Request, res: Response) => {
  try {
    const item = await LostItem.getLostItemById(Number(req.params.id));
    res.json(item);
  } catch {
    res.status(500).json({ error: 'Error fetching lost item' });
  }
};

export const postLostItem = async (req: Request, res: Response) => {
  try {
    const newItem = req.body;
    await LostItem.createLostItem(newItem);
    res.status(201).json({ message: 'Lost item reported successfully' });
  } catch {
    res.status(500).json({ error: 'Error creating lost item' });
  }
};

export const putLostItem = async (req: Request, res: Response) => {
  try {
    await LostItem.updateLostItem(Number(req.params.id), req.body);
    res.json({ message: 'Lost item updated' });
  } catch {
    res.status(500).json({ error: 'Error updating lost item' });
  }
};

export const deleteLostItem = async (req: Request, res: Response) => {
  try {
    await LostItem.deleteLostItem(Number(req.params.id));
    res.json({ message: 'Lost item deleted' });
  } catch {
    res.status(500).json({ error: 'Error deleting lost item' });
  }
};