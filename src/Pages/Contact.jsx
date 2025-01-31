import { useState } from "react";
import Layout from "../Components/Layout";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [arr, setArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name,
      email,
      message,
      MobileNumber
    };
    setArr((prevArr) => [...prevArr, obj]);
    console.log(arr);

    // Send email
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setMobileNumber("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl py-10 mx-auto px-4">
        <h1 className="text-4xl font-bold text-orange-600 mt-20 mb-10">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Get in Touch
            </h2>
            <p className="mb-6">
              We'd love to hear from you! If you have any questions,
              suggestions, or would like to get involved with the Sonoma Hanuman
              Temple project, please don't hesitate to reach out.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Office</h3>
              <div className="space-y-2">
                <p>California,</p>
                <p>2 Hill Drive, </p>
                <p>Petaluma, USA-94952</p>
                <p className="mt-4">jayshreesitarama@gmail.com</p>
                <p className="text-lg font-semibold mt-4">+15 0351 94060</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-orange-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-orange-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="Monumber"
                  name="number"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-orange-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-orange-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
