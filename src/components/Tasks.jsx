import NewTask from "./NewTask";

export default function Tasks({ tasks, handleAddTask, handleDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask handleAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This Project doesn't have any tasks.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.taskText}</span>
              <button
                onClick={() => handleDeleteTask(task.taskId)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
