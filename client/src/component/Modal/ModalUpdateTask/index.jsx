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

export default function ModalUpdateTask() {
  const _GlobalFunction = GlobalFunction();
  const _GlobalObject = GlobalObject();
  const onSubmit = (e) => {
    e.preventDefault();
    const Object = {
      collection_id: _GlobalObject["collectionId"],
      name: document.getElementById("updateName").value,
      description: document.getElementById("updateDescription").value,
      deadline: document.getElementById("updateDeadline").value,
      completed: false,
    };
    axios.put(
      "http://localhost:5001/tasks/update/" + _GlobalObject["id"],
      Object
    );
    _GlobalFunction["toggleUpdate"]();
    _GlobalFunction["updateTaskList"](Object);
  };

  return (
    <div>
      <Modal
        isOpen={_GlobalObject["updateOpen"]}
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
          onClick={() => _GlobalFunction["toggleUpdate"]()}
        >
          x
        </button>

        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" id="updateName" required />
          </label>
          <label>
            Description:
            <input type="text" id="updateDescription" required />
          </label>
          <label>
            Deadline:
            <input type="date" id="updateDeadline" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
}
