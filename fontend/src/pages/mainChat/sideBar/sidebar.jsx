import React, { useEffect, useState } from "react";
import { GiShieldEchoes } from "react-icons/gi";
import useGetConversations from "../../../hooks/useGetConverstions";
import LogoutButton from "../../../components/Buttons/Logout";
import useLogout from "../../../hooks/useLogout";

// Array of Kerala film actors' names
const keralaActors = [
  { name: "Mohanlal", gender: "Male" },
  { name: "Mammootty", gender: "Male" },
  { name: "Dulquer Salmaan", gender: "Male" },
  { name: "Fahadh Faasil", gender: "Male" },
  { name: "Prithviraj Sukumaran", gender: "Male" },
  { name: "Nivin Pauly", gender: "Male" },
  { name: "Jayasurya", gender: "Male" },
  { name: "Dileep", gender: "Male" },
  { name: "Vineeth Sreenivasan", gender: "Male" },
  { name: "Tovino Thomas", gender: "Male" },
  { name: "Indrajith Sukumaran", gender: "Male" },
  { name: "Sreenivasan", gender: "Male" },
];

function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const { loading, conversations } = useGetConversations();
  console.log("conversations", users);
  const { logout } = useLogout();

  return (
    <div className="flex flex-col bg-white text-white w-[400px] flex-shrink-0 py-8  m-1  pl-6 pr-6 rounded ">
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
      <div className="bg-red-500 w-full mt-4 px-2 py-3 rounded-lg border border-gray-200 flex justify-center items-center">
        <div className="border rounded-full overflow-hidden h-20 w-20">
          <img
            className="h-full w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhfMUkU-p61AGJM1Cos9JPNeDjftbetQQSSC31iBu5Q&s"
            alt="Avatar"
          />
        </div>
        <div className="mt-2 ">
          <h1 className="text-[20px] font-semibold ml-2">@Abhi</h1>
          <h4 className="ml-2">Gender: Male</h4>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="flex flex-row items-center justify-between text-xs w-full">
          <label className="input input-bordered bg-white text-black border-2 border-red-400 flex items-center gap-2 w-full">
            <input type="text" className="bg-white" placeholder="Search" />
          </label>
        </div>
        <div className="mt-4 flex flex-col space-y-1 overflow-y-auto h-[580px] -mx-2">
          {keralaActors.map((actor, index) => (
            <button
              key={index}
              style={{}}
              className="hover:bg-red-500 text-black hover:text-white hover:border-2 hover:border-white  rounded-xl p-2 flex flex-row items-center"
            >
              <div className="bg-red-300 rounded-full h-8 w-8 flex items-center justify-center">
                {actor.name.charAt(0)}
              </div>
              <div className="ml-2 text-sm font-semibold  hover:text-white">
                {actor.name}
              </div>
            </button>
          ))}
        </div>
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
