import React, { useState, useRef, useEffect } from "react";
import useSendMessage from "../../../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";
import { MdEmojiEmotions, MdPhotoSizeSelectActual } from "react-icons/md";
import { BsSend } from "react-icons/bs";

function MessageInput() {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  const handleEmojiClick = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + event.emoji);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div
        ref={inputRef}
        className="flex items-center h-16 w-full rounded-xl text-white bg-white px-4 relative"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow h-10 pl-4 pr-12 border rounded-xl focus:outline-none bg-white text-black focus:border-green-300"
        />
        <div className="flex relative top-[-260px] left-[30px]">
          {showEmoji && (
            <div>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        <MdPhotoSizeSelectActual
          className="text-red-500 text-[32px] ml-2 cursor-pointer"
          onClick={openFileDialog}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <MdEmojiEmotions
          onClick={() => setShowEmoji(!showEmoji)}
          className="text-red-500 text-[32px] ml-1 cursor-pointer"
          title="Emoji"
          role="button"
          aria-label="Emoji"
          tabIndex={0}
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
