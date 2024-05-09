import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function CreateTask() {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * 1000000000);
    addTask({ id: randomId, name: task, checked: false });
    setTask('')
  };

  return (
    <div className="items-center flex flex-col border w-[500px] h-24 border-black mx-auto pb-[25px]">
      <h1 className="text-3xl text-center">Создать Задачу</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-row items-start mx-auto w-[500px] justify-between p-2"
      >
        <label htmlFor="name">Имя Задачи:</label>
        <input
          value={task}
          onChange={(e) => setTask((e.target.value).trimStart())}
          type="text"
          className="outline-none border border-black p-1"
          required
        />
        <button className="bg-green-500 text-white border border-black p-1 hover:bg-green-400 active:border-[grey]">
          Добавить Задачу
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
