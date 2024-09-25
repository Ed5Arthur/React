import React from "react";

const VoteChecker = ({ usuario }) => {
  const { idade, registrado } = usuario;

  const podeVotar = () => {
    return idade >= 18 && registrado && idade < 60;
  };

  const votoOpcional = () => {
    return idade >= 60 && registrado;
  };

  const precisaRegistro = () => {
    return idade >= 18 && idade < 60 && !registrado;
  };

  const votoOpcionalERegistro = () => {
    return idade >= 60 && !registrado;
  };

  return (
    <div className="result">
      <h2>
        {podeVotar()
          ? "Você pode votar!"
          : votoOpcional()
          ? "Você pode votar, mas não é obrigatório!"
          : precisaRegistro()
          ? "Você deve se registrar para votar!"
          : votoOpcionalERegistro()
          ? "Seu voto é opcional, mas se você quiser votar, deve se registrar."
          : "Você não pode votar!"}
      </h2>
      <p>
        {podeVotar()
          ? `Idade: ${idade}, Status: Registrado`
          : votoOpcional()
          ? `Idade: ${idade}, Status: Registrado (Voto opcional)`
          : precisaRegistro()
          ? `Idade: ${idade}, Status: Não registrado`
          : votoOpcionalERegistro()
          ? `Idade: ${idade}, Status: Não registrado`
          : `Idade: ${idade}, Status: Não registrado`}
      </p>
    </div>
  );
};

export default VoteChecker;
