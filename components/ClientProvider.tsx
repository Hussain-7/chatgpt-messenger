"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";

function ClientProvider() {
  return (
    <>
      <Toaster position="top-right" />
    </>
  );
}

export default ClientProvider;
