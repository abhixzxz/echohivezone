import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import useGetConversations from "../../../hooks/useGetConverstions";
import useConversation from "../../../zustand/useConversation";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row items-center justify-between text-xs w-full">
        <div className="input input-bordered bg-white text-black border-2 border-red-200 flex items-center gap-2 w-full">
          <input
            type="text"
            className="bg-white flex-1"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" className="outline-none focus:outline-none">
            <FaSearch className="text-[20px] text-red-600" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
