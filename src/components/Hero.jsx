import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
    const navigate = useNavigate()
  return (
    <div className="flex px-40 py-10 gap-40 min-h-[calc(100vh-100px)] text-slate-200 items-center justify-center">
      <div>
        <img
          className="rounded-3xl h-[550px] shadow-slate-600 drop-shadow-lg shadow-xl"
          src="/images/logo-white.svg"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">{props.text}</h1>
        <p className="text-lgfont-light w-[700px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          aut nam nostrum provident eligendi ut ex nobis sequi beatae vel
          ducimus laborum aliquid, explicabo libero ad modi praesentium omnis
          ipsa!
        </p>
        <div onClick={() => navigate("/products")}>
        <Button text="Shop more"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
