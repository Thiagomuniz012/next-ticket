"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditarTicket = ({ ticket }) => {
  const MODO_EDICAO = ticket._id !== "novo";
  const router = useRouter();

  const dadosIniciaisTicket = {
    titulo: ticket.titulo || "",
    descricao: ticket.descricao || "",
    prioridade: ticket.prioridade || 1,
    progresso: ticket.progresso || 0,
    status: ticket.status || "Não iniciado",
    categoria: ticket.categoria || "Problema de Hardware",
  };

  const [formData, setFormData] = useState(dadosIniciaisTicket);

  useEffect(() => {
    if (MODO_EDICAO) {
      setFormData({
        titulo: ticket.titulo,
        descricao: ticket.descricao,
        prioridade: ticket.prioridade,
        progresso: ticket.progresso,
        status: ticket.status,
        categoria: ticket.categoria,
      });
    }
  }, [ticket, MODO_EDICAO])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/Tickets/${MODO_EDICAO ? ticket._id : ""}`, {
      method: MODO_EDICAO ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error(MODO_EDICAO ? "Falha ao atualizar o ticket" : "Falha ao criar o ticket");
    }

    router.refresh();
    router.push("/");
  };

  const categorias = [
    "Problema de Hardware",
    "Problema de Software",
    "Desenvolvimento de Aplicações",
    "Projeto",
  ];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>{MODO_EDICAO ? "Atualizar Ticket" : "Criar Novo Ticket"}</h3>

        <label>Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.titulo}
        />

        <label>Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          onChange={handleChange}
          required={true}
          value={formData.descricao}
          rows="5"
        />

        <label>Categoria</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        >
          {categorias.map((categoria, _index) => (
            <option key={_index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        <label>Prioridade</label>
        <div>
          {[1, 2, 3, 4, 5].map((prioridade) => (
            <label key={prioridade} className="mr-2">
              <input
                id={`prioridade-${prioridade}`}
                name="prioridade"
                type="radio"
                onChange={handleChange}
                value={prioridade}
                checked={Number(formData.prioridade) === prioridade}
              />
              {prioridade}
            </label>
          ))}
        </div>

        <label>Progresso</label>
        <input
          type="range"
          id="progresso"
          name="progresso"
          value={formData.progresso}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Não iniciado">Não Iniciado</option>
          <option value="Iniciado">Iniciado</option>
          <option value="Concluído">Concluído</option>
        </select>

        <input
          type="submit"
          className="btn max-w-xs"
          value={MODO_EDICAO ? "Atualizar Ticket" : "Criar Ticket"}
        />
      </form>
    </div>
  );
};

export default EditarTicket;
