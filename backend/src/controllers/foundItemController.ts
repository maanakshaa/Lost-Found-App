import { Request, Response } from 'express';
import * as FoundItem from '../models/foundItemModel';

export const getFoundItems = async (req: Request, res: Response) => {
  try {
    const items = await FoundItem.getAllFoundItems();
    res.json(items);
  } catch {
    res.status(500).json({ error: 'Error fetching found items' });
  }
};

export const getFoundItem = async (req: Request, res: Response) => {
  try {
    const item = await FoundItem.getFoundItemById(Number(req.params.id));
    res.json(item);
  } catch {
    res.status(500).json({ error: 'Error fetching found item' });
  }
};

export const postFoundItem = async (req: Request, res: Response) => {
  try {
    const newItem = req.body;
    await FoundItem.createFoundItem(newItem);
    res.status(201).json({ message: 'Found item reported successfully' });
  } catch {
    res.status(500).json({ error: 'Error creating found item' });
  }
};

export const putFoundItem = async (req: Request, res: Response) => {
  try {
    await FoundItem.updateFoundItem(Number(req.params.id), req.body);
    res.json({ message: 'Found item updated' });
  } catch {
    res.status(500).json({ error: 'Error updating found item' });
  }
};

export const deleteFoundItem = async (req: Request, res: Response) => {
  try {
    await FoundItem.deleteFoundItem(Number(req.params.id));
    res.json({ message: 'Found item deleted' });
  } catch {
    res.status(500).json({ error: 'Error deleting found item' });
  }
};