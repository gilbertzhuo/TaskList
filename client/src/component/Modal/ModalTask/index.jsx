import React from "react";
import axios from "axios";
import Modal from "react-modal";
import { GlobalFunction, GlobalObject } from "../../../RootProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid grey",
  },
};

export default function ModalTask() {
  const _GlobalFunction = GlobalFunction();
  const _GlobalObject = GlobalObject();
  const onSubmit = (e) => {
    e.preventDefault();
    const object = {
      collection_id: _GlobalObject["collectionId"],
      name: document.getElementById("taskName").value,
      description: document.getElementById("taskDescription").value,
      deadline: Date(document.getElementById("taskDeadline").value),
    };
    axios
      .post("http://localhost:5001/tasks/add", object)
      .then(_GlobalFunction["toggleTask"]());
    _GlobalFunction["addTaskList"](object);
  };

  return (
    <div>
      <Modal
        isOpen={_GlobalObject["taskOpen"]}
        style={customStyles}
        ariaHideApp={false}
      >
        <button
          style={{
            position: "relative",
            float: "right",
            color: "red",
            fontSize: "24px",
            border: "none",
            width: "12px",
          }}
          onClick={() => _GlobalFunction["toggleTask"]()}
        >
          x
        </button>

        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" id="taskName" required />
          </label>
          <label>
            Description:
            <input type="text" id="taskDescription" required />
          </label>
          <label>
            Deadline:
            <input type="date" id="taskDeadline" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
}
