"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form className="p-5 space-x-5 flex">
        <input
          type="text"
          placeholder="Type a message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="outline-none ring-0 focus:outline-none bg-transparent flex-1"
        />
        <button type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Modal Selection */}</div>
    </div>
  );
}

export default ChatInput;
