// src/models/foundItemModel.ts
import db from '../config/db';

export const getAllFoundItems = async () => {
  const [rows] = await db.query('SELECT * FROM found_items');
  return rows;
};

export const getFoundItemById = async (id: number) => {
  const [rows] = await db.query('SELECT * FROM found_items WHERE id = ?', [id]);
  return rows;
};

export const createFoundItem = async (data: any) => {
  const [result] = await db.query('INSERT INTO found_items SET ?', [data]);
  return result;
};

export const updateFoundItem = async (id: number, data: any) => {
  const [result] = await db.query('UPDATE found_items SET ? WHERE id = ?', [data, id]);
  return result;
};

export const deleteFoundItem = async (id: number) => {
  const [result] = await db.query('DELETE FROM found_items WHERE id = ?', [id]);
  return result;
};