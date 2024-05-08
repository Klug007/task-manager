import React from "react";

function TasksDone() {
  return (
    <div className="">
      <h1>Выполненые Задачи</h1>
      <ul className="flex flex-col border-black border mx-auto w-[500px] justify-center my-[25px]">
        <Task />
      </ul>
    </div>
  );
}

export default TasksDone;
