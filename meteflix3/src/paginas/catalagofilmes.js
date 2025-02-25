import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../api"; 

export default function Catalogo() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get(`${server}/`) 
      .then(response => setFilmes(response.data))
      .catch(error => console.error("Erro ao buscar filmes:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {filmes.map(filme => (
          <li key={filme._id}>
            <h2>{filme.nome}</h2>
            <p>{filme.descricao}</p>
            {filme.imagem_url && <img src={filme.imagem_url} alt={filme.nome} />}
            <br />
            <a href={filme.trailer_url} target="_blank" rel="noopener noreferrer">Assistir Trailer</a> 
          </li>
        ))}
      </ul>
    </div>
  );
}


//os erros estao aqui nao posso esquecer