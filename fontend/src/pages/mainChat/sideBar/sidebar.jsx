import React from "react";
import { GiShieldEchoes } from "react-icons/gi";

import LogoutButton from "../../../components/Buttons/Logout";
import useLogout from "../../../hooks/useLogout";
import useGetConversations from "../../../hooks/useGetConverstions";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustant/useConversation";
import Conversations from "./conversations";

function Sidebar() {
  const { loading, conversations } = useGetConversations();
  const { logout } = useLogout();
  const { authUser } = useAuthContext();

  console.log("authUser", authUser);

  return (
    <div className="flex flex-col bg-white text-white w-[400px] flex-shrink-0 py-8  m-1  pl-6 pr-6 rounded ">
      {/* Header */}
      <div className="w-full h-12 flex flex-row items-center justify-center">
        <div className=" flex items-center justify-center">
          <GiShieldEchoes
            style={{
              color: "",
              WebkitTextStroke: "1px white",
              textStroke: "0.3px white",
            }}
            className="text-[40px] text-black"
          />
          <div
            className="ml-2 acme-regular text-[30px] text-black"
            style={{
              color: "",
              WebkitTextStroke: "1px white",
              textStroke: "0.3px white",
            }}
          >
            ECHOHIVZONE
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-red-500 w-full mt-4 px-2 py-3 rounded-lg border border-gray-200 flex justify-center items-center">
        {/* User Avatar */}
        <div className="border rounded-full overflow-hidden h-20 w-20">
          <img
            className="h-full w-full"
            src={authUser?.profilePic}
            alt="Avatar"
          />
        </div>
        {/* User Details */}
        <div className="mt-2 ">
          <h1 className="text-[20px] font-semibold ml-2">
            @{authUser?.username}
          </h1>
        </div>
      </div>

      {/* Conversation List */}
      <div className="mt-8 flex flex-col">
        {/* Search Input */}
        <div className="flex flex-row items-center justify-between text-xs w-full">
          <label className="input input-bordered bg-white text-black border-2 border-red-400 flex items-center gap-2 w-full">
            <input type="text" className="bg-white" placeholder="Search" />
          </label>
        </div>

        {/* Conversation Buttons */}
        {/* Conversation Buttons */}
        <div className="mt-4 flex flex-col space-y-1 overflow-y-auto h-[580px] -mx-2">
          {conversations.map((conversation, index) => (
            <Conversations conversation={conversation} key={index} />
          ))}
        </div>

        {/* Logout Button */}
        <div
          onClick={logout}
          className="mt-8 p-2 rounded bg-red-500 flex items-center justify-center gap-3 uppercase cursor-pointer"
        >
          <LogoutButton />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
