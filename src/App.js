import React, { useState } from "react";

import "./styles.css";

function App() {
  const [repositoriesState, setRepositories] = useState([]);

  async function handleAddRepository() {
    setRepositories([
      ...repositoriesState,
      {
        id: "123",
        url: "https://github.com/josepholiveira",
        title: "Desafio ReactJS",
        techs: ["React", "Node.js"],
      },
    ]);
  }

  async function handleRemoveRepository(id) {
    const currentRepositoriesState = [...repositoriesState];

    setRepositories(
      currentRepositoriesState.filter((repository) => repository.id !== id)
    );
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositoriesState.map((repository, index) => (
          <li key={index}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
