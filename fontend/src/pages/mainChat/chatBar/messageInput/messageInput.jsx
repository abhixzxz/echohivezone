import React, { useState } from "react";
import useSendMessage from "../../../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";
import { MdEmojiEmotions } from "react-icons/md";
import { BsSend } from "react-icons/bs";

function MessageInput() {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className=" flex items-center h-16 w-full rounded-xl text-white bg-white px-4">
        <EmojiPicker open={showEmoji} className="absolute top-[-200px]" />

        <MdEmojiEmotions
          onClick={() => setShowEmoji(!showEmoji)}
          className="text-red-500 text-[32px] mr-2 cursor-pointer"
        />

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow h-10 pl-4 pr-12 border rounded-xl focus:outline-none bg-white text-black focus:border-green-300"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-3 bg-red-500 hover:bg-green-600 text-white rounded-xl"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
