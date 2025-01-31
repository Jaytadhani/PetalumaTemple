import React, { useState } from "react";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", address: "", mobile: "", email: "" });
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-10">
      <h2 className="text-center text-orange-300 text-2xl font-semibold mb-5">
        Event Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-orange-300 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
          {errors.name && <p className="text-orange-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="text-orange-300 font-medium">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
          {errors.address && <p className="text-orange-500 text-sm">{errors.address}</p>}
        </div>

        <div>
          <label className="text-orange-300 font-medium">Mobile No:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
          {errors.mobile && <p className="text-orange-500 text-sm">{errors.mobile}</p>}
        </div>

        <div>
          <label className="text-orange-300 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
          {errors.email && <p className="text-orange-500 text-sm">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
        >
          Register
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-orange-300 text-xl font-semibold">Registration Successful!</h3>
            <p className="text-white mt-2">Thank you for registering.</p>
            <button
              onClick={closeModal}
              className="mt-4 p-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;
