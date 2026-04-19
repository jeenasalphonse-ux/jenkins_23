import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import transportRoutes from './routes/transport.js';
import ticketRoutes from './routes/tickets.js';
import Ticket from './models/Ticket.js'; // import ticket model

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/tickets', ticketRoutes); // central ticket route

// Frontend routes
app.get('/', (req, res) => res.send('Backend running'));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, '..', 'frontend', 'signup.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '..', 'frontend', 'login.html')));
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
