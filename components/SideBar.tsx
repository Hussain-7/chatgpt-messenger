"use client";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* New Chat */}
        <NewChat />
        <div>{/* Model Selection */}</div>
        {/* Map through the ChatRows */}
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="user"
          className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default SideBar;
