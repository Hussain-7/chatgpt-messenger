"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // TODO: useswr to get the model
  const model = "text-davinci-003";

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send the message
    if (!prompt) return;
    const input = prompt.trim();
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    // Saved assed prompt to message in firebase
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    setPrompt("");
    // toast notification loading
    const notification = toast.loading("ChatGPT is thinking...");
    // send api to backend to ask gpt the question
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // toast notification succesfull!
      toast.success("ChatGPT has responded!", { id: notification });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          type="text"
          placeholder="Type a message here..."
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          className="outline-none ring-0 focus:outline-none bg-transparent flex-1
					disabled:cursor-not-allowed disabled:text-gray-300"
        />
        <button
          disabled={!session || !prompt}
          type="submit"
          className={`bg-[#11A37F] hover:opacity-50 
				text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Modal Selection */}</div>
    </div>
  );
}

export default ChatInput;
