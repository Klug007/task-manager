import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

function TaskCompleted() {
  const { tasks } = useContext(TaskContext);
  const completedTask = tasks.filter((item) => item.checked === true);
  return (
    <div>
      <h1 className="text-3xl text-center">Задачи Выполненные</h1>
      <ul className="flex flex-col gap-1 mx-auto w-[500px] justify-center my-[25px]">
        {completedTask.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskCompleted;
