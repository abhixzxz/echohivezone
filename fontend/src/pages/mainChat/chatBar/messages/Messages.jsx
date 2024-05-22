import { useEffect, useRef } from "react";
import useGetMessages from "../../../../hooks/useGetMessages";
import MessageSkeleton from "../../../../components/skelotons/MessageSkeloton";
import Message from "../message/Message";
import useListenMessages from "../../../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const coutSkeliton = messages.length;
  console.log(coutSkeliton);
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto relative">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {/* {loading && [...Array()].map((_, idx) => <MessageSkeleton key={idx} />)} */}
      {loading && (
        <span className="loading loading-bars loading-lg flex items-center justify-center absolute left-[550px] top-[250px] text-white"></span>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
