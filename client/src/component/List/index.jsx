import React, { useContext } from "react";
import axios from "axios";
import "./List.css";
import { GlobalFunction } from "../../RootProvider";

export default function List(props) {
  const _GlobalFunction = GlobalFunction();
  const deleteTask = (num) => {
    axios.delete("http://localhost:5001/tasks/" + num);
    window.location.reload();
  };
  const completeTask = (item) => {
    axios.put("http://localhost:5001/tasks/update/" + item.id, {
      collection_id: item.collection_id,
      name: item.name,
      description: item.description,
      deadline: item.deadline,
      completed: !item.completed,
    });
  };
  const update = (num, num2) => {
    _GlobalFunction["toggleId"](num);
    _GlobalFunction["toggleCollectionId"](num2);
    _GlobalFunction["toggleUpdate"]();
  };

  return (
    <>
      {props.item.map((item, index) => {
        return (
          <div className="td__main" key={index}>
            <ul className="td__main-notes">
              <li>
                <div className="subheader">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => completeTask(item)}
                      defaultChecked={item.completed}
                    />
                    <span> {item.name} </span>
                  </label>
                  <span className="ts"> {item.deadline.substring(0, 10)} </span>
                </div>
                <p style={{ color: "grey" }}>{item.description}</p>
                <div className="center">
                  <button onClick={() => update(item.id, item.collection_id)}>
                    UPDATE
                  </button>
                  <button onClick={() => deleteTask(item.id)}>DELETE</button>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
