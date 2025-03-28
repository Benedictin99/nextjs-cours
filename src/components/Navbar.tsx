"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  return (
    <div className="bg-amber-200 flex items-center justify-between px-3">
      <div className="flex  p-2">
        <img src="title_logo.svg" alt="logo img" className="w-6" />
        <div className="flex">
          <p className="text-2xl font-bold">TELE</p>
          <p className="text-2xl font-bold text-blue-500">MED</p>
        </div>
      </div>
      <div>
        {connected ? (
          <User />
        ) : (
          <Button className="bg-blue-500">Commencer</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
