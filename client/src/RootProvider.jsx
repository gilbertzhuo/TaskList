import React, { useState, createContext, useContext } from "react";

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

  return (
    <RootContext.Provider
      value={{
        listOpen,
        taskOpen,
        updateOpen,
        id,
        collectionId,
      }}
    >
      <RootUpdateContext.Provider
        value={{
          toggleList,
          toggleTask,
          toggleUpdate,
          toggleId,
          toggleCollectionId,
        }}
      >
        {children}
      </RootUpdateContext.Provider>
    </RootContext.Provider>
  );
}
