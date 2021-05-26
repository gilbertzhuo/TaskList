import "./App.scss";
import TaskList from "./component/TaskList";
import ModalList from "./component/Modal/ModalList";
import ModalTaskList from "./component/Modal/ModalTask";
import ModalUpdateTask from "./component/Modal/ModalUpdateTask";
import { GlobalObject } from "./RootProvider";
import React from "react";

function App() {
  const _GlobalObject = GlobalObject();
  return (
    <div className="mainContainer">
      {console.log(_GlobalObject)}
      <div className="header">
        <h1> TASK LIST </h1>
      </div>
      <TaskList />
      <ModalList />
      {console.log(_GlobalObject)}
      <ModalTaskList
        id={GlobalObject["id"]}
        collectionId={GlobalObject["collectionId"]}
      />
      <ModalUpdateTask
        id={GlobalObject["id"]}
        collectionId={GlobalObject["collectionId"]}
      />
    </div>
  );
}

export default App;
