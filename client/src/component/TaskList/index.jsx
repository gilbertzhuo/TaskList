import React, { useEffect } from "react";
import "./TaskList.css";
import List from "../List";
import { GlobalObject, GlobalFunction } from "../../RootProvider";

export default function TaskList() {
  const _GlobalObject = GlobalObject();
  const _GlobalFunction = GlobalFunction();

  useEffect(() => {
    _GlobalFunction["getTaskList"]();
  }, []);
  function addTask(num) {
    _GlobalFunction["toggleCollectionId"](num);
    _GlobalFunction["toggleTask"]();
    _GlobalFunction["getTaskList"]();
  }
  return (
    <div className="wide slider">
      {_GlobalObject["taskList"]
        ? _GlobalObject["taskList"].map((item) => {
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
