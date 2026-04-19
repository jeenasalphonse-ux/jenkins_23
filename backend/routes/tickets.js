import { Router } from 'express';
import Ticket from '../models/Ticket.js';

const router = Router();

// GET /api/tickets
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const query = userId ? { userId } : {};
    const tickets = await Ticket.find(query).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    console.error('GET /api/tickets error:', err);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// POST /api/tickets
router.post('/', async (req, res) => {
  try {
    const { ticketId, destination, mode, date, price, userId, userName } = req.body;

    if (!userId || !ticketId || !destination || !mode || !date || price == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const ticket = await Ticket.create({ userId, userName, ticketId, destination, mode, date, price });
    res.status(201).json(ticket);
  } catch (err) {
    console.error('POST /api/tickets error:', err);
    // Handle duplicate ticketId nicely
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Duplicate ticketId' });
    }
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

export default router;
