import React, { useState } from "react";
import ImgInitial from "../../../assets/images/3255395.jpg";
import useConversation from "../../../zustant/useConversation";
function ChatSection() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [inputText, setInputText] = useState("");
  const selectedChat = false;
  const [messages, setMessages] = useState([
    { id: 1, sender: "A", text: "Hey haii ?" },
    {
      id: 2,
      sender: "A",
      text: "Oops its sending  ..",
    },
    { id: 3, sender: "B", text: "ok ?" },
    {
      id: 4,
      sender: "B",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
    },
  ]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const lastMessageSender = messages[messages.length - 1].sender;
    const newSender = lastMessageSender === "A" ? "B" : "B";

    const newMessage = {
      id: messages.length + 1,
      sender: newSender,
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
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
            <div className="flex flex-col mb-4 h-full overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-2 ${
                    message.sender === "A" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "A"
                        ? "bg-white text-black"
                        : "bg-green-100 text-black"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center h-16 w-full rounded-xl text-white bg-white px-4">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-grow h-10 pl-4 pr-12 border rounded-xl focus:outline-none bg-white text-black focus:border-green-300"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 px-4 py-3 bg-red-500 hover:bg-green-600 text-white rounded-xl"
            >
              Send
            </button>
          </div>
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
