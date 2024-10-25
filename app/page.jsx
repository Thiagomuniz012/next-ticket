import React from "react";
import CartaoTicket from "./(components)/CartaoTicket";

const obterTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Falha ao buscar tickets");
    }

    return res.json();
  } catch (error) {
    console.log("Erro ao carregar tickets: ", error);
  }
};

const Dashboard = async () => {
  const data = await obterTickets();

  if (!data?.tickets) {
    return <p>Nenhum ticket disponível.</p>;
  }

  const tickets = data.tickets;

  const categoriasUnicas = [
    ...new Set(tickets?.map(({ categoria }) => categoria)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          categoriasUnicas?.map((categoriaUnica, indiceCategoria) => (
            <div key={indiceCategoria} className="mb-4">
              <h2>{categoriaUnica}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.categoria === categoriaUnica)
                  .map((ticketFiltrado, _index) => (
                    <CartaoTicket
                      id={_index}
                      key={_index}
                      ticket={ticketFiltrado}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
