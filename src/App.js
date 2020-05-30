import React from "react";
import { uuid } from "uuidv4";

import api from "./services/api";
import "./styles.css";

function App() {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    async function loadData() {
      const { data } = await api.get("repositories");

      setRepositories(data);
    }

    loadData();
  }, []);

  async function handleAddRepository() {
    try {
      const { data } = await api.post("repositories");

      setRepositories([...repositories, data]);
    } catch (err) {
      alert(err);
    }
  }

  async function handleRemoveRepository(repositoryId) {
    try {
      await api.delete(`repositories/${repositoryId}`);

      setRepositories([
        ...repositories.filter(
          (currentRepositoriy) => currentRepositoriy.id !== repositoryId
        ),
      ]);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((el) => (
          <li key={el.id}>
            {el.title}
            <button
              onClick={() => handleRemoveRepository(el.id)}
              name="Remover"
            >
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
