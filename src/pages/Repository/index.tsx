import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/app-logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronRight size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/47507696?s=460&u=6fa1d4b3bff60d6ff6b44c4c284e97a42ae976d0&v=4"
            alt="Luciano"
          />
          <div>
            <strong>Luciano github</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>180</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>120</strong>
            <span>{params.repository}</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="mimimi">
          <div>
            <strong>lalala</strong>
            <p>bubububu</p>
          </div>

          <FiChevronLeft size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
