import React, { useState } from "react";
import Card from "./Card";
import Message from "./Message";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return <div>{chat ? <Card /> : <Message />}</div>;
};

export default Chat;
