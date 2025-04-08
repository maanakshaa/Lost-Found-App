import db from '../config/db';

export const getAllLostItems = async () => {
  const [rows] = await db.query('SELECT * FROM lost_items');
  return rows;
};

export const getLostItemById = async (id: number) => {
  const [rows] = await db.query('SELECT * FROM lost_items WHERE id = ?', [id]);
  return rows;
};

export const createLostItem = async (data: any) => {
  const [result] = await db.query('INSERT INTO lost_items SET ?', [data]);
  return result;
};

export const updateLostItem = async (id: number, data: any) => {
  const [result] = await db.query('UPDATE lost_items SET ? WHERE id = ?', [data, id]);
  return result;
};

export const deleteLostItem = async (id: number) => {
  const [result] = await db.query('DELETE FROM lost_items WHERE id = ?', [id]);
  return result;
};