import React from "react";
import Sidebar from "./sideBar/sidebar";
import ChatSection from "./chatBar/charBar";

function MainChat() {
  return (
    <div className="bg-slate-900 h-screen flex antialiased text-gray-800">
      <div className="overflow-x-hidden h-full w-full flex flex-row">
        <Sidebar />
        <ChatSection />
      </div>
    </div>
  );
}

export default MainChat;
