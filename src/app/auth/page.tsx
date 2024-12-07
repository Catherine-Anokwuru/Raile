"use client";

import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const [view, setView] = useState<"login" | "register">("login");

  return view === "register" ? (
    <Signup view="register" setView={setView} />
  ) : (
    <Login view="login" setView={setView} />
  );
};
export default Auth;
