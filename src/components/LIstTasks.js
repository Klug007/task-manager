import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";

function ListTasks() {
  const { tasks } = useContext(TaskContext);
  console.log(tasks);
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center">Список Задач</h1>
      <ul className="flex flex-col gap-1 mx-auto w-[500px] justify-center my-[25px]">
        {tasks.map((task) =>
          task?.checked === false ? <Task key={task.id} task={task} /> : <></>
        )}
      </ul>
    </div>
  );
}

export default ListTasks;
