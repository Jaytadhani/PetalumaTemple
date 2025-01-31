import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const staticEvents = [
  {
    id: 1,
    title: "Vedic Chanting",
    description: "Join us for sacred Vedic chanting sessions",
    date: "March 15, 2024",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Festival Celebration",
    description: "Annual temple festival with traditional rituals",
    date: "April 10, 2024",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Yoga Workshop",
    description: "Beginner-friendly yoga sessions for all ages",
    date: "May 5, 2024",
    type: "Latest",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const EventCard = ({ event }) => (
  <Link to={`/events/${event.id}`} className="block px-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-300 hover:shadow-lg transition-shadow duration-300 h-full">
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-2">{event.description}</p>
        <p className="text-sm text-gray-500 mb-2">{event.date}</p>
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
            event.type === "Upcoming"
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {event.type}
        </span>
      </div>
    </div>
  </Link>
);

const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slick-slider-container pb-8">
      <Slider {...settings}>
        {staticEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
