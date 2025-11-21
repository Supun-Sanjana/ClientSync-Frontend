import { createContext, useContext, useState } from "react";

const ProjectContext = createContext<any>(null);

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [refreshProjects, setRefreshProjects] = useState(0);

  const triggerRefresh = () => {
    setRefreshProjects(prev => prev + 1);
  };

  return (
    <ProjectContext.Provider value={{ refreshProjects, triggerRefresh }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
