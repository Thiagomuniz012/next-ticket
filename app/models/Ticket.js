import mongoose, { Schema } from "mongoose";

if (!mongoose.connections[0].readyState) {
  mongoose.connect(process.env.MONGODB_URI);
}

const ticketSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    categoria: String,
    prioridade: Number,
    progresso: Number,
    status: String,
    ativo: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
