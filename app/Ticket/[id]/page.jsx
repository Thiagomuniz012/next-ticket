import EditarTicket from "@/app/(components)/EditarTicket";

const obterTicketPorId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Falha ao buscar o ticket");
    }

    const data = await res.json();
    return data.foundTicket;
  } catch (error) {
    console.log(error);
  }
};

const PaginaTicket = async ({ params }) => {
  const MODO_EDICAO = params.id !== "novo";
  let ticket = {};

  if (MODO_EDICAO) {
    ticket = await obterTicketPorId(params.id);
  } else {
    ticket = { _id: "novo" };
  }

  return <EditarTicket ticket={ticket} />;
};

export default PaginaTicket;
