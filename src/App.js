import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import LIstTasks from "./components/LIstTasks";

function App() {
  return (
    <div className="App">
      <Header />
      <LIstTasks />
      <hr />
      <CreateTask />
    </div>
  );
}

export default App;
