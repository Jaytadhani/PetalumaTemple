import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { MdOutlineAccessTime, MdOutlinePhoneInTalk, MdPeople, MdShare } from "react-icons/md";
import { BsFillCalendarDateFill, BsWhatsapp } from "react-icons/bs";
import { FaCalendarAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { events } from "../data/eventData";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const [showShareMenu, setShowShareMenu] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Layout>
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-orange-600 mb-4">Event Not Found</h1>
              <p className="text-gray-600 mb-6">The event you're looking for doesn’t exist or has been removed.</p>
              <Link to="/event" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                View All Events
              </Link>
            </div>
          </main>
        </Layout>
      </div>
    );
  }

  const relatedEvents = events
    .filter(e => e.id !== event.id && e.type === event.type)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[50vh] lg:h-[60vh] w-full">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto px-2 sm:px-4 h-full flex items-end pb-4 sm:pb-8 md:pb-12">
            <div className="text-white w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{event.title}</h1>
              <div className="flex flex-wrap items-start gap-2 sm:gap-3">
                <span className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <FaCalendarAlt className="text-sm sm:text-base" /> {event.date}
                </span>
                <span className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <MdOutlineAccessTime className="text-sm sm:text-base" /> {event.time}
                </span>
                <span className={`px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm ${
                  event.type === "Upcoming" ? "bg-green-500" : "bg-blue-500"
                }`}>
                  {event.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-6 md:space-y-8">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">About the Event</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">{event.longDescription || event.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">Event Details</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FaLocationArrow className="text-orange-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base text-gray-700">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MdPeople className="text-orange-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base text-gray-700">Capacity: {event.capacity} people</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <BiLogoGmail className="text-orange-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base text-gray-700 break-all">{event.Email}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MdOutlinePhoneInTalk className="text-orange-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base text-gray-700">{event.Phone}</span>
                    </div>
                    {event.language && (
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-orange-500 flex-shrink-0 text-sm sm:text-base">🗣</span>
                        <span className="text-sm sm:text-base text-gray-700">{event.language}</span>
                      </div>
                    )}
                    {event.dresscode && (
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-orange-500 flex-shrink-0 text-sm sm:text-base">👔</span>
                        <span className="text-sm sm:text-base text-gray-700">{event.dresscode}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">Registration Status</h3>
                  <div className="text-center">
                    <span className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base text-white ${
                      event.registrationStatus === "Open" ? "bg-green-500" : "bg-yellow-500"
                    }`}>
                      {event.registrationStatus}
                    </span>
                    <button className="w-full mt-3 sm:mt-4 bg-orange-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-orange-700 transition">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              {event.schedule && (
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">Event Schedule</h3>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-2 sm:p-4 bg-orange-50 rounded-lg">
                        <div className="bg-orange-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-sm sm:text-base sm:w-32 text-center">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base text-gray-700">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Features Section */}
              {(event.requirements || event.specialFeatures || event.performers) && (
                <div className="mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    {event.requirements && (
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">Requirements</h4>
                        <p className="text-sm sm:text-base text-gray-700">{event.requirements}</p>
                      </div>
                    )}
                    {event.specialFeatures && (
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">Special Features</h4>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                          {event.specialFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {event.performers && (
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">Featured Performers</h4>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                          {event.performers.map((performer, index) => (
                            <li key={index}>{performer}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-6">
            {/* Share Section */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-orange-700 transition"
                >
                  <MdShare className="text-sm sm:text-base" /> Share Event
                </button>
                {showShareMenu && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-3 sm:p-4 z-10">
                    <div className="flex justify-around">
                      <button className="p-2 sm:p-3 hover:bg-orange-50 rounded-full transition-colors">
                        <FaFacebookF className="text-blue-600 text-lg sm:text-xl" />
                      </button>
                      <button className="p-2 sm:p-3 hover:bg-orange-50 rounded-full transition-colors">
                        <FaTwitter className="text-blue-400 text-lg sm:text-xl" />
                      </button>
                      <button className="p-2 sm:p-3 hover:bg-orange-50 rounded-full transition-colors">
                        <BsWhatsapp className="text-green-500 text-lg sm:text-xl" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Event Organizer */}
            {event.organizer && (
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">Event Organizer</h3>
                <div className="text-sm sm:text-base text-gray-700">{event.organizer}</div>
              </div>
            )}

            {/* Related Events */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">Related Events</h3>
              <div className="space-y-3 sm:space-y-4">
                {relatedEvents.map(relatedEvent => (
                  <Link
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-orange-50 transition">
                      <img
                        src={relatedEvent.img}
                        alt={relatedEvent.title}
                        className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition truncate text-sm sm:text-base">
                          {relatedEvent.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{relatedEvent.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default EventDetail;




import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Layout from "../Components/Layout"
import { getEvents } from "../store/eventsSlice"
import Loader from "../Components/Loader"

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

const Event = () => {
  const dispatch = useDispatch()
  const { events, status, error } = useSelector((state) => state.events)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getEvents())
    }
  }, [status, dispatch])

  useEffect(() => {
    if (status === "succeeded" || status === "failed") {
      setIsLoading(false)
    }
  }, [status])

  if (isLoading) {
    return <Loader />
  }

  if (status === "failed") {
    return <div>Error: {error}</div>
  }

  const upcomingEvents = events.filter((event) => event.type === "Upcoming")
  const latestEvents = events.filter((event) => event.type === "Latest")

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <main className="flex-grow container mx-auto px-4 py-8">
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

  import React from "react"
import Layout from "../Components/Layout"

const Vision = () => {
  const shortTermGoals = [
    {
      activity: "Member's Drive",
      targetDate: "March 2025",
      frequency: "Bi-Weekly",
      description: "Adding 100 Members/Week",
    },
    {
      activity: "Documentation & Legalities",
      targetDate: "June 2025",
      frequency: "One-Time",
      description: "Establishing compliance with legal requirements",
    },
    { 
      activity: "Infrastructure & Property Development",
      targetDate: "Sept 2025",
      frequency: "Half-Yearly",
      description: "Developing the physical premises of the temple",
    },
    {
      activity: "Biweekly Yajnas (Hawans)",
      targetDate: "Dec 2025",
      frequency: "Bi-Weekly",
      description: "Ceremonial fire offerings for purification and blessings",
    },
    {
      activity: "Naam Sankirtan",
      targetDate: "Dec 2025",
      frequency: "Every Saturday Evening",
      description: "Community singing and chanting of divine names",
    },
    {
      activity: "Cultural Dramas",
      targetDate: "Feb 2026",
      frequency: "Monthly",
      description: "Performances based on moral stories from Hindu scriptures, encouraging character development",
    },
    {
      activity: "Sanskrit Classes",
      targetDate: "Apr 2026",
      frequency: "Weekly",
      description: "Teaching Sanskrit to preserve and propagate the language of Hindu scriptures",
    },
    {
      activity: "Philosophical Discussions",
      targetDate: "July 2026",
      frequency: "Monthly",
      description: "Exploring Hindu philosophy and its relevance to modern life, conducted in English for inclusivity",
    },
    {
      activity: "Ayurveda and Yoga Workshops",
      targetDate: "August 2026",
      frequency: "Quarterly",
      description: "Promoting health and wellness through ancient Indian sciences",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1697729865428-720962b67655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Temple entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center px-4">
            Our Vision & Short-Term Goals
          </h1>
        </div>
      </div>

      {/* Vision Statement */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center mb-6 md:mb-8">Temple Vision</h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-8">
          Our temple strives to be a beacon of spiritual enlightenment, cultural preservation, and community growth. We
          envision a space where ancient wisdom meets modern life, fostering spiritual growth and understanding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {["Spiritual Growth", "Cultural Preservation", "Community Building"].map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">{pillar}</h3>
              <p className="text-gray-600">
                Dedicated to nurturing and expanding our {pillar.toLowerCase()} initiatives.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Short Term Goals Section */}
      <section className="bg-orange-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center mb-8 md:mb-12">
            Our Short-Term Goals
          </h2>

          {/* Goals Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 md:mb-16">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Target Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shortTermGoals.map((goal, index) => (
                    <tr key={index} className="hover:bg-orange-50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-orange-500">
                        {goal.activity}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{goal.targetDate}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{goal.frequency}</td>
                      <td className="px-4 py-4 text-sm text-gray-500">{goal.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline Visualization */}
          <h3 className="text-xl md:text-2xl font-bold text-orange-500 text-center mb-6 md:mb-8">
            Implementation Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-orange-300 transform -translate-x-1/2"></div>
            <div className="space-y-8 md:space-y-12">
              {shortTermGoals.map((goal, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"} mb-4 md:mb-0`}
                  >
                    <h4 className="text-lg font-semibold text-orange-500">{goal.activity}</h4>
                    <p className="text-sm text-orange-300">{goal.targetDate}</p>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center mb-4 md:mb-0">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                    <p className="text-sm text-gray-600">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us in Our Journey</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Be a part of our growing community and help us achieve these goals together.
          </p>
          <button className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Vision;

