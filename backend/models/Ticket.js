import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  userName: { type: String },
  ticketId: { type: String, required: true, unique: true },
  destination: { type: String, required: true },
  mode: { type: String, enum: ['Bus', 'Train', 'Cab', 'Flight'], required: true },
  date: { type: String, required: true }, // keep as string if you send "YYYY-MM-DD"
  price: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export default mongoose.model('Ticket', TicketSchema);
