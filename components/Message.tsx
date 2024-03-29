import { DocumentData } from "firebase/firestore";
import React from "react";
type Props = {
  message: DocumentData;
};
const Message = ({ message }: Props) => {
  const isChatGpt = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGpt && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt={message.user.name}
          className="h-8 w-8"
        />
        <p className="pt-1 text-sm flex flex-col">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
