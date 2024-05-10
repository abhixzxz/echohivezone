// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import useConversation from "../../../zustant/useConversation";

function Conversations({ conversation, key }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <button
        key={key}
        className={`hover:bg-red-500 text-black hover:text-white hover:border-2 hover:border-white  rounded-xl p-2 flex flex-row items-center 
        ${isSelected ? "bg-red-500 border-2 border-red-600 text-white" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="rounded-full p-[2px] bg-green-400">
          <img
            src={conversation?.profilePic}
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="flex items-center justify-center ml-3 capitalize font-bold">
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
