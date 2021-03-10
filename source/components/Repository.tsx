import { useEffect, useState } from "react";

import '@styles/repository.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

function Repository() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/duc-k/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, [])

  return (
    <div className="repository">
      <h1>Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <li key={repository.id}>
              <a href={repository.html_url} target="_blank">
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
                <span><span className="badge"></span>{repository.language ?? 'Desconhecida'}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Repository;