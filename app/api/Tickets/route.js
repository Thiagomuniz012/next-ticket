import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ mensagem: "Erro", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const dadosTicket = body.formData;

    if (!dadosTicket.titulo || !dadosTicket.descricao || !dadosTicket.prioridade) {
      return NextResponse.json(
        { mensagem: "Dados incompletos. Verifique título, descrição e prioridade." },
        { status: 400 }
      );
    }

    const novoTicket = await Ticket.create(dadosTicket);

    return NextResponse.json({ mensagem: "Ticket Criado", ticket: novoTicket }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ mensagem: "Erro", err }, { status: 500 });
  }
}
