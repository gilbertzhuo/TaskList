import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskList.css";
import List from "../List";
import { GlobalFunction } from "../../RootProvider";

export default function TaskList() {
  const [taskLists, setTaskList] = useState(null);
  const _GlobalFunction = GlobalFunction();
  useEffect(() => {
    const getTaskList = async () => {
      const res = await axios.get("http://localhost:5001/tasks/all");
      setTaskList(res.data);
    };
    getTaskList();
  }, []);
  function addTask(num) {
    _GlobalFunction["toggleCollectionId"](num);
    _GlobalFunction["toggleTask"]();
  }
  return (
    <div className="wide slider">
      {taskLists
        ? taskLists.map((item) => {
            return (
              <div
                className="wrapper td"
                key={item["list"][0]["collection_id"]}
              >
                <div className="td__header">
                  <div className="td__header-title">
                    <p> {item["list"][0]["collection_id"]} </p>
                  </div>
                  <div className="td__header-task">
                    <p> {item["list"].length} Task</p>
                    <button
                      className="addtodo"
                      onClick={() => addTask(item["list"][0]["collection_id"])}
                    />
                  </div>
                </div>
                <List item={item["list"]} />
              </div>
            );
          })
        : ""}
    </div>
  );
}
