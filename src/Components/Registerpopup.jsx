import React from "react";

const Registerpopup = ({setmodal}) => {
  return (
    <div onClick={()=>setmodal(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-3"
        />
        <div className="flex gap-3">
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
        <button  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
         Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Registerpopup;
