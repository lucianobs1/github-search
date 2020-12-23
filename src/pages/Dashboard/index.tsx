import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/app-logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositorio" type="text" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/47507696?s=460&u=6fa1d4b3bff60d6ff6b44c4c284e97a42ae976d0&v=4"
          alt="Luciano Brandão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/47507696?s=460&u=6fa1d4b3bff60d6ff6b44c4c284e97a42ae976d0&v=4"
          alt="Luciano Brandão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/47507696?s=460&u=6fa1d4b3bff60d6ff6b44c4c284e97a42ae976d0&v=4"
          alt="Luciano Brandão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
