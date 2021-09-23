import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [myProjetcts, setMyProjects] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

  const context = {
    myProjetcts,
    setMyProjects,
    isLoading,
    seIsLoading,
  };

  return (
    <ProjectContext.Provider value={context}>
      { children }
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  return context;
}

ProjectProvider.propTypes = {
  children: node.isRequired,
};
