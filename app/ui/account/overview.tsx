"use client";

import { useState } from "react";
import SignIn from "@ui/account/sign-in";
import Register from "@ui/account/register";

const tabs = [
  {
    name: "SIGN IN",
    isActive: true,
  },
  {
    name: "REGISTER",
    isActive: false,
  },
] as const;

export default function AccountOverview() {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex w-full max-w-[30rem] flex-col items-center pt-10 text-sm">
        <h1 className="mb-7 text-2xl font-semibold">ACCOUNT</h1>
        <div className="mb-3 flex w-full text-xs font-medium">
          {tabs.map(({ name, isActive }, index) => (
            <div
              key={index}
              className={`relative flex w-[50%] cursor-pointer items-center justify-center py-3 ${isSignIn === isActive && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"}`}
              onClick={() => setIsSignIn(isActive)}
            >
              {name}
            </div>
          ))}
        </div>
        {isSignIn ? <SignIn /> : <Register />}
      </div>
    </div>
  );
}
