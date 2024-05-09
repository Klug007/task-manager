import React, { createContext, useReducer, useEffect } from "react";
import useReducerTask from "./Reducer";

const initialValue = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [] 
};

export const TaskContext = createContext(initialValue);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useReducerTask, initialValue);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch({ type: "LOAD_TASKS", payload: JSON.parse(storedTasks) });
    }
  }, []);

  // Actions

  function deleteTask(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function addTask(task) {
    dispatch({ type: "ADD", payload: task });
  }

  function checkTask(id) {
    dispatch({ type: "FINISHED", payload: id });
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        deleteTask,
        addTask,
        checkTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
