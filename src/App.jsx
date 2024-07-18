import React from "react";
import Profile from "./Components/Profile";
import Databox from "./Components/Databox";

export default function App() {
  return (
    <div className="bg-very-dark-blue text-white h-full w-screen flex flex-col items-center font-rubik md:flex-row md:justify-center md:gap-[1em] md:h-screen">
      <Profile />
      <Databox />
    </div>
  );
}
