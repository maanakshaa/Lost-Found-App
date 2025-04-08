import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import lostItemRoutes from './routes/lostItemRoutes';
import foundItemRoutes from './routes/foundItemRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/lost-items', lostItemRoutes);
app.use('/api/found-items', foundItemRoutes);

app.get('/', (req, res) => {
  res.send('Lost & Found API Running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});