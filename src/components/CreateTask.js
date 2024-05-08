import React from "react";

function CreateTask() {
  return (
    <div className="items-center flex flex-col  my-5 border border-black w-[300px] mx-auto pb-[50px]">
      <h1 className="my-5">Создать Задачу</h1>
      <form className="flex flex-col items-start mx-auto w-[200px] gap-3">
        <label htmlFor="name">Имя Задачи:</label>
        <input type="text" className="outline-none border border-black p-1" />
        <button className="bg-green-500 text-white border border-black p-1">Добавить Задачу</button>
      </form>
    </div>
  );
}

export default CreateTask;
