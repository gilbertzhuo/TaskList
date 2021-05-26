import "./App.scss";
import TaskList from "./component/TaskList";
import ModalList from "./component/Modal/ModalList";
import ModalTaskList from "./component/Modal/ModalTask";
import ModalUpdateTask from "./component/Modal/ModalUpdateTask";
import React from "react";

function App() {
  return (
    <div className="mainContainer">
      <div className="header">
        <h1> TASK LIST </h1>
      </div>
      <TaskList />
      <ModalList />
      <ModalTaskList />
      <ModalUpdateTask />
    </div>
  );
}

export default App;
