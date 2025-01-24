import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { MdOutlineAccessTime, MdOutlinePhoneInTalk } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaCalendarAlt, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const events = [
  {
    id: 1,
    title: "Temple Ceremony",
    description:
      "Join us for a sacred ceremony to celebrate our temple's anniversary. This annual event brings together our community in a day of reflection, gratitude, and spiritual growth. The ceremony will include traditional rituals, chanting, and a special address by our head priest.",
    date: "2025-02-15",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Main Temple Hall",
    time: "10:00 AM - 2:00 PM",
    Email: "info@templeevents.com",
    Phone: "+91 99999 99999",
  },
  {
    id: 2,
    title: "Diwali Festival",
    description:
      "Celebrate Diwali with us! A night of lights, music, and food. Our Diwali festival is a joyous occasion that illuminates our temple grounds with thousands of lamps. Enjoy cultural performances, partake in the lighting ceremony, and savor delicious traditional sweets and savories.",
    date: "2025-11-12",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1729038871332-4c6186464770?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Temple Grounds",
    time: "6:00 PM - 11:00 PM",
    Email: "diwali@templeevents.com",
    Phone: "+91 99999 99999",

  },
  {
    id: 3,
    title: "Meditation Retreat",
    description:
      "A weekend of peace and mindfulness in our serene temple grounds. This retreat offers a chance to disconnect from the outside world and focus on inner peace and spiritual growth. Guided meditation sessions, yoga classes, and insightful talks by experienced practitioners are included.",
    date: "2025-07-20",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Temple Meditation Garden",
    time: "Friday 6:00 PM - Sunday 2:00 PM",
    Email: "retreat@templeevents.com",
    Phone: "+91 99999 99999",

  },
  {
    id: 4,
    title: "Cultural Dance Performance",
    description:
      "Experience the beauty of traditional dances in our temple courtyard. This event showcases a variety of classical and folk dances, bringing to life the rich cultural heritage of our community. Talented dancers from across the region will perform, accompanied by live music.",
    date: "2025-09-05",
    type: "Latest",
    img: "https://plus.unsplash.com/premium_photo-1718570262836-ba36efdfd4a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Temple Courtyard",
    time: "7:00 PM - 9:30 PM",
    Email: "culture@templeevents.com",
    Phone: "+91 99999 99999",

  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center text-2xl text-orange-600">
            Event not found
          </div>
        </main>
        <footer className="bg-orange-100 text-orange-600 text-center py-4">
          <p>&copy; 2025 Temple Events. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-orange-600 mb-4">
              {event.title}
            </h1>
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-300">
              <img
                src={event.img || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-6 gap-4">
  <div>
    <h2 className="text-xl font-semibold text-orange-600 mb-2">
      Date & Time
    </h2>
    <div className="flex gap-3 items-center">
      <FaCalendarAlt className="text-orange-600" />
      <p className="text-gray-600">{event.date}</p>
    </div>
    <div className="flex gap-3 mt-1 items-center">
      <MdOutlineAccessTime className="text-orange-600" />
      <p className="text-gray-600">{event.time}</p>
    </div>
  </div>
  <div>
    <h2 className="text-xl font-semibold text-orange-600 mb-2">
      Location
    </h2>
    <div className="flex gap-3 items-center text-orange-500">
      <FaLocationArrow />
      <p className="text-gray-600">{event.location}</p>
    </div>
  </div>
</div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-orange-600 mb-2">
                  Contact
                </h2>
              <div className="flex gap-3 items-center text-orange-500">
              <BiLogoGmail />
              <p className="text-gray-600">{event.Email}</p>
              </div>
              <div className="flex gap-3 mt-1 items-center text-orange-500">
           <MdOutlinePhoneInTalk />
              <p className="text-gray-600">{event.Phone}</p>
              </div>
              </div>
              <div className="mt-6">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded ${
                    event.type === "Upcoming"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default EventDetail;
