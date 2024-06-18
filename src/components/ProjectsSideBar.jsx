import Button from "./Button";

export default function ProjectsSideBar({
  handleAddProjectButton,
  projects,
  handleSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={handleAddProjectButton}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((eachProject) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (eachProject.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += "  text-stone-400";
          }

          return (
            <li key={eachProject.id}>
              <button
                onClick={() => handleSelectProject(eachProject.id)}
                className={cssClasses}
              >
                {eachProject.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
