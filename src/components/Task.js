import React from 'react'

function Task() {
  return (
    <>
      <li className="grid place-items-center grid-cols-[50px_1fr_1fr]">
        <input type="checkbox" className="justify-self-start m-2" />
        <h1 className="justify-self-start">Name</h1>
        <button className="border-black justify-self-end bg-red-500 text-white border-[2px] p-1">
          Удалить задачу
        </button>
      </li>
    </>
  );
}

export default Task