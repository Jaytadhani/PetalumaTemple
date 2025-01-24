import React from "react"
import { Link } from "react-router-dom"
import Layout from "../Components/Layout"

const EventCard = ({ id, title, description, date, type, img }) => {
  return (
    <Link to={`/events/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-300 hover:shadow-lg transition-shadow duration-300">
        <img src={img || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded ${type === "Upcoming" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
          >
            {type}
          </span>
        </div>
      </div>
    </Link>
  )
}

const events = [
  {
    id: 1,
    title: "Temple Ceremony",
    description: "Join us for a sacred ceremony to celebrate our temple's anniversary.",
    date: "2025-02-15",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Diwali Festival",
    description: "Celebrate Diwali with us! A night of lights, music, and food.",
    date: "2025-11-12",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1729038871332-4c6186464770?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Meditation Retreat",
    description: "A weekend of peace and mindfulness in our serene temple grounds.",
    date: "2025-07-20",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Cultural Dance Performance",
    description: "Experience the beauty of traditional dances in our temple courtyard.",
    date: "2025-09-05",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1718570262836-ba36efdfd4a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Temple Ceremony",
    description: "Join us for a sacred ceremony to celebrate our temple's anniversary.",
    date: "2025-02-15",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Diwali Festival",
    description: "Celebrate Diwali with us! A night of lights, music, and food.",
    date: "2025-11-12",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1729038871332-4c6186464770?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Meditation Retreat",
    description: "A weekend of peace and mindfulness in our serene temple grounds.",
    date: "2025-07-20",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Cultural Dance Performance",
    description: "Experience the beauty of traditional dances in our temple courtyard.",
    date: "2025-09-05",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1718570262836-ba36efdfd4a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const Event = () => {
  const upcomingEvents = events.filter((event) => event.type === "Upcoming")
  const latestEvents = events.filter((event) => event.type === "Latest")

  return (
    <div className="min-h-screen flex flex-col">
    <Layout>
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-bold text-orange-600 mb-8">Temple Events</h1> */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Latest Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {latestEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </main>
      </Layout>
    </div>
  )
}

export default Event

