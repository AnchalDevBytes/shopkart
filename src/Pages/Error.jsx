import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[380px] w-[500px] bg-cyan-200 flex flex-col gap-4 items-center justify-center px-10 rounded-xl text-slate-600">
        <h1 className="text-5xl font-bold">404</h1>
        <h4 className="text-3xl font-medium">OH! You are lost.</h4>
        <p className="text-base font-light">
          The page you are lokking for does not exist. How you got here is a
          mystry. But you can click the button below to go back to Home page.
        </p>
        <div onClick={() => navigate("/")}>
          <Button text={"Home"} />
        </div>
      </div>
    </div>
  );
};

export default Error;
