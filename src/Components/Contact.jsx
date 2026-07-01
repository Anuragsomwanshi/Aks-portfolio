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

    }
  };

  return (
    <div id="Contact" className="max-w-7xl mx-auto px-4 py-4">
      <h1 className=" place-self-center text-2xl">Get In Touch</h1>

      <div className="  mt-35 flex flex-col  items-center gap-6 ">

        
        <form onSubmit={onSubmit} className="space-y-6">
          
          <div className="flex flex-col w-full max-w-2xl gap-8">

          
            
              <input
                className="w-full px-6 py-3 rounded border outline-none"
                placeholder="Enter Name"
                type="text"
                name="name"
              />
              
            

        
              <input
                className="w-full px-6 py-3 rounded border outline-none"
                placeholder="Enter Email"
                type="text"
                name="email"
              />
            
        

          
            <input
              className="w-full px-6 py-3 rounded border outline-none"
              placeholder="Enter subject"
              type="text"
              name="subject"
            />
          

          
            <textarea
              className="w-full px-6 py-3 rounded border outline-none"
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
