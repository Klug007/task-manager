import React from "react";
import Task from "./Task";

function LIstTasks() {
  return (
    <ul className="flex flex-col border-black border mx-auto w-[500px] justify-center my-[25px]">
      <Task />
    </ul>
  );
}

export default LIstTasks;
