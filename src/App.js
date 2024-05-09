import "./App.css";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import TaskCompleted from "./components/TaskCompleted";

function App() {
  return (
    <div className="App grid grid-cols-3 gap-1 mt-10">
      <CreateTask />
      <ListTasks />
      <TaskCompleted />
    </div>
  );
}

export default App;
