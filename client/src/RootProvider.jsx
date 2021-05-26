import React, { useState, createContext, useContext } from "react";
import axios from "axios";

const RootContext = createContext();
const RootUpdateContext = createContext();

export function GlobalObject() {
  return useContext(RootContext);
}

export function GlobalFunction() {
  return useContext(RootUpdateContext);
}

export function RootProvider({ children }) {
  const [listOpen, setListOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [id, setId] = useState(0);
  const [collectionId, setCollectionId] = useState(0);

  function toggleList() {
    setListOpen(!listOpen);
  }
  function toggleTask() {
    setTaskOpen(!taskOpen);
  }
  function toggleUpdate() {
    setUpdateOpen(!updateOpen);
  }
  function toggleId(num) {
    setId(num);
  }
  function toggleCollectionId(num) {
    setCollectionId(num);
  }
  function addTaskList(list) {
    if (list == null) setTaskList(null);
    // let object = taskList;
    // setTaskList(object.push(list));
  }
  const getTaskList = async () => {
    const res = await axios.get("http://localhost:5001/tasks/all");
    setTaskList(res.data);
  };

  return (
    <RootContext.Provider
      value={{
        listOpen,
        taskOpen,
        updateOpen,
        id,
        collectionId,
        taskList,
      }}
    >
      <RootUpdateContext.Provider
        value={{
          toggleList,
          toggleTask,
          toggleUpdate,
          toggleId,
          toggleCollectionId,
          addTaskList,
          getTaskList,
        }}
      >
        {children}
      </RootUpdateContext.Provider>
    </RootContext.Provider>
  );
}
