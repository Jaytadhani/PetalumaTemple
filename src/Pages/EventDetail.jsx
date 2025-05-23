import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { MdOutlineAccessTime, MdOutlinePhoneInTalk, MdPeople, MdShare } from "react-icons/md";
import { BsFillCalendarDateFill, BsWhatsapp } from "react-icons/bs";
import { FaCalendarAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { fetchEvents, requestToken } from "../services/api";
import Registerpopup from "../Components/Registerpopup";
import Loader from "../Components/Loader";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    const loadEventDetail = async () => {
      try {
        const token = await requestToken();
        const events = await fetchEvents(token);
        const foundEvent = events.find((e) => e.id === parseInt(id));
        
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          setError("Event not found");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadEventDetail();
  }, [id]);

  if (loading) return <div>
    <Loader/>
  </div>;
  if (error || !event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Layout>
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-orange-600 mb-4">Event Not Found</h1>
              <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
              <Link
                to="/events"
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                View All Events
              </Link>
            </div>
          </main>
        </Layout>
      </div>
    );
  }

  // const relatedEvents = events
  //   .filter((e) => e.id !== event.id && e.type === event.type)
  //   .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[50vh] lg:h-[60vh] w-full">
        <img src={event.image_full_url || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
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
                <span
                  className={`px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm ${
                    event.type === "Upcoming" ? "bg-green-500" : "bg-blue-500"
                  }`}
                >
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">
                About the Event
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                {event.long_description }
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">
                    Event Details
                  </h3>
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
                      <span className="text-sm sm:text-base text-gray-700 break-all">{event.email}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MdOutlinePhoneInTalk className="text-orange-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base text-gray-700">{event.phone}</span>
                    </div>
                    {event.language && (
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-orange-500 flex-shrink-0 text-sm sm:text-base">🗣</span>
                        <span className="text-sm sm:text-base text-gray-700">{event.language}</span>
                      </div>
                    )}
                    {event.dress_code && (
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-orange-500 flex-shrink-0 text-sm sm:text-base">👔</span>
                        <span className="text-sm sm:text-base text-gray-700">{event.dress_code}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-orange-50 p-3 sm:p-4 md:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">
                    Registration Status
                  </h3>
                  <div className="text-center">
                    <span
                      className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base text-white ${
                        event.registration_status === "Open" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    >
                      {event.registration_status}
                    </span>
                    <button onClick={()=>setmodal(true)} className="w-full mt-3 sm:mt-4 bg-orange-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-orange-700 transition">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              {event.events_schedule && (
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">
                    Event Schedule
                  </h3>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {event.events_schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-2 sm:p-4 bg-orange-50 rounded-lg"
                      >
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-2 sm:mb-4">
                    Additional Information
                  </h3>
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
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 sm:mb-4">
                  Event Organizer
                </h3>
                <div className="text-sm sm:text-base text-gray-700">{event.organizer}</div>
              </div>
            )}          
          </div>
        </div>
      </main>
      {
        modal && (
          <Registerpopup setmodal={setmodal}/>
        )
      }
    </Layout>
  );
};

export default EventDetail;