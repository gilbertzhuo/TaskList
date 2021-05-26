import React, { useContext } from "react";
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

export default function ModalTask(props) {
  const _GlobalFunction = GlobalFunction();
  const _GlobalObject = GlobalObject();
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/tasks/add", {
      collection_id: props.collectionId,
      name: document.getElementById("taskName").value,
      description: document.getElementById("taskDescription").value,
      deadline: Date(document.getElementById("taskDeadline").value),
    });
    _GlobalFunction["toggleTask"]();
    window.location.reload();
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
