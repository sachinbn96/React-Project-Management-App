import { useState } from "react";

import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import ProjectsSideBar from "./components/ProjectsSideBar";
import NoProjectSelected from "./components/noProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    addProjectModalOpened: false,
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(taskText) {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        taskText: taskText,
        taskId: taskId,
        projectId: prev.selectedProjectId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleAddProjectButton() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        addProjectModalOpened: true,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        addProjectModalOpened: false,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleSaveAddProject(projectData) {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prev,
        selectedProjectId: projectId,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        addProjectModalOpened: false,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const content = projectsState.selectedProjectId ? (
    <SelectedProject
      project={selectedProject}
      handleDeleteProject={handleDeleteProject}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  ) : projectsState.addProjectModalOpened ? (
    <NewProject
      handleSaveAddProject={handleSaveAddProject}
      handleCancelAddProject={handleCancelAddProject}
    />
  ) : (
    <NoProjectSelected handleAddProjectButton={handleAddProjectButton} />
  );
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        handleAddProjectButton={handleAddProjectButton}
        projects={projectsState.projects}
        handleSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
