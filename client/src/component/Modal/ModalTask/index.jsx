import React, { useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import { rootContext } from "../../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalTask(props) {
  const isOpen = useContext(rootContext);
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/tasks/add", {
      collection_id: props.collection_id,
      name: document.getElementById("taskName").value,
      description: document.getElementById("taskDescription").value,
      deadline: document.getElementById("taskDeadline").value,
    });
    isOpen["toggleTask"]();
    window.location.reload();
  };

  return (
    <div key={isOpen["taskOpen"]}>
      <Modal
        isOpen={isOpen["taskOpen"]}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={() => isOpen["toggleTask"]()}> close </button>{" "}
        <div> I am a modal </div>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" id="taskName" />
          </label>
          <label>
            Description:
            <input type="text" id="taskDescription" />
          </label>
          <label>
            Deadline:
            <input type="date" id="taskDeadline" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
}
