import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.65983299309!2d85.2389251528664!3d23.343340860600705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1690280243901!5m2!1sen!2sin"
          width="100%"
          height="360"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex items-center justify-center mb-5">
        <div className="h-[400px] w-[550px] bg-cyan-900 flex flex-col gap-4 items-center justify-center px-10 rounded-xl text-slate-600">
          <h3 className="text-3xl font-semibold text-white">Contact us</h3>
          <input
            className="py-3 px-24 rounded-md text-center outline-none"
            type="text"
            placeholder="Name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            className="py-3 px-24 rounded-md text-center outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="py-3 px-24 rounded-md text-center outline-none"
            name="message"
            cols="20"
            placeholder="Message"
            rows="3"
            autoComplete="off"
            required
          />
          <div>
            <Button text={"Send"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
