import { useRef } from "react";

import Input from "./input";
import Modal from "./Modal";

export default function NewProject({
  handleSaveAddProject,
  handleCancelAddProject,
}) {
  const modal = useRef();

  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Opens modal
      // This open metod is the one defined in Modal component's useImperativeHandle()
      modal.current.open();
      return;
    }
    handleSaveAddProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancelAddProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} labelName="Title" />
          <Input ref={descRef} labelName="Description" isTextArea />
          <Input type="date" ref={dueDateRef} labelName="Due Date" />
        </div>
      </div>
    </>
  );
}
