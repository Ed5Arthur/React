import React, { useState } from "react";
import VoteCheck from "./VoteChecker";
import "./index.css";

const App = () => {
  const [usuario, setUsuario] = useState({ idade: "", registrado: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      registrado: e.target.checked,
    }));
  };

  return (
    <div className="container">
      <h1>Verificação de Elegibilidade para Voto</h1>
      <input
        type="number"
        name="idade"
        placeholder="Idade"
        value={usuario.idade}
        onChange={handleChange}
        className="input-field"
      />
      {usuario.idade >= 18 && (
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={usuario.registrado}
            onChange={handleCheckboxChange}
          />
          Registrado para votar
        </label>
      )}
      {/* Verifica se a idade não está vazia antes de renderizar o VoteChecker */}
      {usuario.idade !== "" && <VoteCheck usuario={usuario} />}
    </div>
  );
};

export default App;
