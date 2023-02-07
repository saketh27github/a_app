import React from "react";
import "./Chatbody.css";
import Chatcontent from "../chatcontent/Chatcontent";
import { useState } from "react";

const Chatbody = () => {

  const [data, setData] = useState([]);

  const user_list = ["Alex", "Bobby", "Captain", "Ironman", "Thor"];

  const messageAdd = (val) => {
    const temp = {
      msg: val,
      count: 0,
      id: data.length,
      user: user_list[data.length % 5],
    };
    setData([...data, temp]);
  };
  const addLike = (ind) => {
    const temp = data;
    temp[ind].count = temp[ind].count + 1;
    setData([...temp]);
  };

  return (
    <div className="chat-body">
      {data &&
        data.map((item, i) => {
          return (
            <div className="section-chat">
              <div className="row">
                <div className="col-sm-4">
                  <span className="name-heading">{item.user}</span>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4 like-thumb">
                  <span>
                    {item.count}
                    <i
                      className="fa-solid fa-thumbs-up"
                      onClick={(e) => addLike(i)}
                    ></i>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                  <span className="msg-seen">{item.msg}</span>
                </div>
              </div>
            </div>
          );
        })}
      <Chatcontent messageAdd={messageAdd} />
    </div>
  );
};

export default Chatbody;
