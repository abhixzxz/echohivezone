import React, { useEffect, useState } from "react";
import ImgInitial from "../../../assets/images/3255395.jpg";
import useSendMessage from "../../../hooks/useSendMessage";
import useConversation from "../../../zustand/useConversation";
import useGetMessages from "../../../hooks/useGetMessages";
import MessageInput from "./messageInput/messageInput";
import Messages from "./messages/Messages";

function ChatSection() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages } = useGetMessages();

  const selectedChat = false;
  // const [messages, setMessages] = useState([
  //   { id: 1, sender: "A", text: "Hey haii ?" },
  //   {
  //     id: 2,
  //     sender: "A",
  //     text: "Oops its sending  ..",
  //   },
  //   { id: 3, sender: "B", text: "ok ?" },
  //   {
  //     id: 4,
  //     sender: "B",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
  //   },
  // ]);

  // const handleSendMessage = () => {
  //   if (inputText.trim() === "") return;

  //   const lastMessageSender = messages[messages.length - 1].sender;
  //   const newSender = lastMessageSender === "A" ? "B" : "B";

  //   const newMessage = {
  //     id: messages.length + 1,
  //     sender: newSender,
  //     text: inputText,
  //   };

  //   setMessages([...messages, newMessage]);
  //   setInputText("");
  // };

  // useEffect(() => {
  //   return () => setSelectedConversation(null);
  // }, [setSelectedConversation]);

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div className="h-screen w-full">
      {selectedConversation ? (
        <div className="flex flex-col p-2 w-full h-screen">
          <div className="flex items-center gap-3 p-5 py-4 rounded h-auto bg-slate-600">
            <div className="">
              <img
                src={selectedConversation?.profilePic}
                alt="prfile pic"
                className="h-16 w-16"
              />
            </div>
            <div className="">
              <h1 className="text-white font-bold">
                {selectedConversation?.fullName}
              </h1>
              <em className="text-white text-[14px]">Online</em>
            </div>
          </div>

          <div
            className="flex flex-col flex-auto rounded-2xl p-4 h-full overflow-x-auto"
            style={{
              backgroundImage:
                "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(25,16,49)),repeating-linear-gradient(135deg, rgb(25,16,49) 0px, rgb(25,16,49) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(20,22,24) 0px, rgb(20,22,24) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(25,16,49),rgb(25,16,49))",
            }}
          >
            <Messages />
          </div>

          <MessageInput />
        </div>
      ) : (
        <div className="my-auto flex pb-1 pt-1">
          <img src={ImgInitial} alt="img chat" className="h-[99vh] rounded" />
        </div>
      )}
    </div>
  );
}

export default ChatSection;
