/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import gitConnectedApi from '../../Services/API';

import styles from './styles.module.scss';

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await gitConnectedApi();
        setMyProjects(projects);
        setIsloading(false);
        return true;
      } catch (error) {
        return error.message;
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className={styles.projectContainer}>
      <div>
        <h1>Meus Projetos</h1>
        {console.log(myProjects)}
        {isLoading ? (
          <h3>Carregando ...</h3>
        ) : (
          <section>
            <h3>Estamos em manutencao. Volte amanha!</h3>
            {/* Aqui entra o Carousel e sai esse h3 */}
          </section>
        )}
      </div>
    </section>
  );
}
