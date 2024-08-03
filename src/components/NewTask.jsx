import { useState, useRef } from "react";

import Modal from "./Modal";

export default function NewTask({ handleAddTask }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    handleAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          onChange={handleChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
