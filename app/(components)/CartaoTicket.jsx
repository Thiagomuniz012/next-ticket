import Status from "./Status";
import Prioridade from "./Prioridade";
import ExcluirTicket from "./ExcluirTicket";
import Progresso from "./Progresso";
import Link from "next/link";

const CartaoTicket = ({ ticket }) => {
  function formatarDataHora(timestamp) {
    const opcoes = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const data = new Date(timestamp);
    return data.toLocaleString("pt-BR", opcoes);
  }

  const dataCriacao = formatarDataHora(ticket.createdAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Prioridade prioridade={ticket.prioridade} />
        <div className="ml-auto">
          <ExcluirTicket id={ticket._id} />
        </div>
      </div>
      <Link href={`/Ticket/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="mb-1">{ticket.titulo}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.descricao}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{dataCriacao}</p>
            <Progresso progresso={ticket.progresso} />
          </div>
          <div className="ml-auto flex items-end">
            <Status status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartaoTicket;
