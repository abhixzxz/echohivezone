/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import useConversation from "../../../zustand/useConversation";
import { useSocketContext } from "../../../context/SocketContext";
import useGetMessages from "../../../hooks/useGetMessages";

function Conversations({ conversation, key }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const { messages, loading } = useGetMessages();

  // console.log("conversation:=>", conversation);

  return (
    <>
      <button
        key={key}
        className={`hover:bg-red-500 text-black hover:text-white hover:border-2 hover:border-white  rounded-xl p-2  flex w-full items-center 
        ${isSelected ? "bg-red-500 border-2 border-red-600 text-white" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div
          className={`relative rounded-full p-[2px]  ${
            isOnline ? "bg-green-400" : "bg-white"
          }`}
        >
          {isOnline && (
            <div className="absolute h-5 w-5 bg-green-500 border-[4px] left-[-5px] border-white rounded-full"></div>
          )}
          <img
            src={conversation?.profilePic}
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="flex items-center justify-center ml-3 capitalize">
          {conversation?.fullName}
        </div>

        {/* User Details */}
        <div className="ml-2 text-sm font-semibold hover:text-white flex-grow">
          <div className=" text-right">{conversation?.gender}</div>
        </div>
      </button>
    </>
  );
}

export default Conversations;
