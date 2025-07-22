"use client";
import { useState } from "react";
import "./Aichat.css";
import Sidebar from "./components/sidebar";
import Messages from "./components/messages";
import InputMessage from "./components/inputChat";
export default function Aichat() {
  const [closeActive, setCloseActive] = useState(false);

  return (
    <div className="chat-container">
    
      <Sidebar closeActive={closeActive} setCloseActive={setCloseActive} />
      <div className="chat-main">
          <Messages />
         {<InputMessage /> }
      </div>
    </div>
  );
}
