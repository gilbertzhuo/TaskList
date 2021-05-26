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

export default function ModalList() {
  const _GlobalObject = GlobalObject();
  const _GlobalFunction = GlobalFunction();

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/tasks/add", {
      collection_id: document.getElementById("name").value,
      name: "This is your title",
      description: "This is your description",
      deadline: "2020-12-31",
    });
    _GlobalFunction["toggleList"]();
    window.location.reload();
  };
  const deleteAll = () => {
    axios.delete("http://localhost:5001/tasks/");
    window.location.reload();
  };
  return (
    <>
      <Modal
        isOpen={_GlobalObject["listOpen"]}
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
          onClick={() => _GlobalFunction["toggleList"]()}
        >
          x
        </button>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" name="name" id="name" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
      <div className="center">
        <div
          className="addList"
          onClick={() => _GlobalFunction["toggleList"]()}
        >
          NEW LIST
        </div>
        <div className="addList" onClick={() => deleteAll()}>
          DELETE ALL
        </div>
      </div>
    </>
  );
}
