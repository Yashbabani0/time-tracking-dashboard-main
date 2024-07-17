import React from "react";
import Profile from "./Components/Profile";
import Databox from "./Components/Databox";

export default function App() {
  return (
    <div className="bg-very-dark-blue text-white h-screen w-screen flex flex-col items-center  font-rubik">
      <Profile />
      <Databox />
    </div>
  );
}
