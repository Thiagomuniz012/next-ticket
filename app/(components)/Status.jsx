const ExibicaoStatus = ({ status }) => {
  const obterCor = (status) => {
    let cor;
    switch (status) {
      case "Concluído":
        cor = "bg-green-200";
        return cor;
      case "Iniciado":
        cor = "bg-yellow-200";
        return cor;
      case "Não iniciado":
        cor = "bg-red-200";
        return cor;
      default:
        cor = "bg-slate-700";
    }
    return cor;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${obterCor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default ExibicaoStatus;
