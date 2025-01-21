import React, { useState } from "react"
import Layout from "../Components/Layout"

const Contact = () => {

    const [name, setName]  = useState("")
    const [email, setEmail]  = useState("")
    const [message, setMessage]  = useState("")
    const[arr,setarr]=useState([])

    const handleClick = (e) => {
        e.preventDefault()
        const obj={
            name,
            email,
            message
        }
        setarr((prevArr) => [...prevArr, obj]);
        console.log(arr)

    }


  return (
    <Layout>
      <div className="max-w-3xl py-10 mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mt-22 ">Contact Us</h1>
        <div className="grid grid-cols-2 gap-5">
            <div>
        <p className="mb-6">
          We'd love to hear from you! If you have any questions, suggestions, or would like to get involved with the
          Sonoma Hanuman Temple project, please don't hesitate to reach out.
        </p>
        </div>
        <div>
        <form className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block text-orange-600 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-orange-600 mb-1">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
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
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              onClick={handleClick}
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
        </div>
   
      </div>
    </Layout>
  )
}

export default Contact

