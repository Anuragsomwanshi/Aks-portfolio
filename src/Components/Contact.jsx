import React from "react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9cc07c8a-0b35-47f9-afc0-c9979c8f1eff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      setTimeout(() => {
        setResult("");
      }, 2000);
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="Contact" className="min-h-screen">
      <h1 className=" place-self-center text-2xl">Get In Touch</h1>

      <div className="max-w-3xl mx-auto  mt-35 ">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <div>
              <input
                className="  m-5 px-4 py-3 w-full   rounded border border-gray-140 outline-none  "
                placeholder="Enter Name"
                type="text"
                name="name"
              />
            </div>

            <div >
              <input
                className=" m-5 px-4 py-3  w-full rounded border border-gray-140 outline-none "
                placeholder="Enter Email"
                type="text"
                name="email"
              />
            </div>
          </div>

          <div>
            <input
              className=" m-5 px-4 py-3  w-full border border-gray-140 rounded ountline-none "
              placeholder="Enter subject"
              type="text"
              name="subject"
            />
          </div>

          <div>
            <textarea
              className=" m-5 px-4 py-3 w-full h-40 border border-gray-140 rounded ountline-none"
              placeholder="Enter Message"
              type="textarea"
              name="message"
            />
          </div>

          <div className="flex flex-col items-center  justify-center">
            <button
              type="submit"
              className="  py-2 px-6  bg-yellow-200 border border-transparent  hover:border-black hover:bg-transparent transition duration-500 cursor-pointer "
            >
              submit
            </button>
            <span>{result}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
