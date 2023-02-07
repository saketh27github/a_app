import React from "react";
import { useState } from "react";
import "./Chatcontent.css";
import InputEmoji from "react-input-emoji";

const Chatcontent = ({ messageAdd }) => {
  const [msglist, setMsgList] = useState("");

  const sendMsg = () => {
    messageAdd(msglist);
    setMsgList("");
  };
  const handleOnEnter = (msglist) => {
    console.log("enter", msglist);
  };

  return (
    <div className="content-fluid">
      <div className="content-body">
        <InputEmoji
          value={msglist}
          onChange={setMsgList}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />

        <button className="btn-send" onClick={sendMsg}>
          <span>Send</span>
          <i className="fa-solid fa-share"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatcontent;
