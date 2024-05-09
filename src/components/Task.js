import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Task({ task }) {
  const { deleteTask, checkTask } = useContext(TaskContext);
  return (
    <>
      <li className="grid border-black border place-items-center grid-cols-[50px_1fr_1fr]">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => checkTask(task.id)}
          className="justify-self-start m-2"
        />
        <h1 className={`'justify-self-start' ${task.checked ? 'line-through' : ''}`}>{task.name}</h1>
        <button
          onClick={() => deleteTask(task.id)}
          className="border-black justify-self-end bg-red-500 hover:bg-red-400 active:border-blue-900 text-white border-[1px] p-1"
        >
          Удалить задачу
        </button>
      </li>
    </>
  );
}

export default Task;
