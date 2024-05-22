import React, { useState } from "react";
import { GiShieldEchoes } from "react-icons/gi";
import ECHOHIVZONEImg from "../../../assets/images/ECHOHIVZONE.png";

import LogoutButton from "../../../components/Buttons/Logout";
import useLogout from "../../../hooks/useLogout";
import useGetConversations from "../../../hooks/useGetConverstions";
import { useAuthContext } from "../../../context/AuthContext";

import Conversations from "./conversations";
import SearchInput from "./ searchInput";

function Sidebar() {
  const { loading, conversations } = useGetConversations();
  const { logout } = useLogout();
  const { authUser } = useAuthContext();

  console.log("authUser", authUser);

  return (
    <div className="flex flex-col justify-between bg-white text-white w-full sm:w-80 md:w-96 lg:w-[400px] flex-shrink-0 py-8 m-1 pl-6 pr-6 rounded relative">
      <div className="">
        <div className="w-full h-12 flex flex-row items-center justify-center">
          <div className="flex items-center justify-center">
            {/* <GiShieldEchoes
              style={{
                color: "",
                WebkitTextStroke: "1px white",
                textStroke: "0.3px white",
              }}
              className="text-[40px] text-black"
            /> */}
            <div className="">
              <img
                src={ECHOHIVZONEImg}
                alt="img"
                className="mx-auto"
                style={{
                  width: "70%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-red-100 w-full mt-4 px-2 py-3 rounded-lg border border-gray-200 text-red-700 flex justify-center items-center">
          <div className="border rounded-full overflow-hidden h-20 w-20">
            <img
              className="h-full w-full"
              src={authUser?.profilePic}
              alt="Avatar"
            />
          </div>

          <div className="mt-2 ">
            <h1 className="text-[20px] font-semibold ml-2">
              @{authUser?.username}
            </h1>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <SearchInput />
          <div className="flex flex-col space-y-1 overflow-y-auto h-[60vh] mt-2">
            {conversations.map((conversation, index) => (
              <Conversations conversation={conversation} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div
        onClick={logout}
        className="p-2 rounded bg-red-500 flex items-center justify-center gap-3 uppercase cursor-pointer bottom-0"
      >
        <LogoutButton />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
