import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { fetchEvents, requestToken } from "../services/api";
import { useEffect, useState } from "react";

const EventSlider = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const token = await requestToken();
        const eventsList = await fetchEvents(token);
        setEvents(eventsList);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Default to 1
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{
             delay: 2000,
             disableOnInteraction: false, // Ensures autoplay resumes after interaction
             pauseOnMouseEnter: true, // Stops autoplay when hovered
             pauseOnMouseLeave: true, // Resumes autoplay when hover ends
             }}
        loop={true}     
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile: 1 card
          768: { slidesPerView: 3 }, // Mid screen: 3 cards
          1024: { slidesPerView: 4 }, // Large screen: 4 cards
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="flex justify-center">
            <Link to={`/events/${event.id}`} className="block w-full max-w-[300px]">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-300 hover:shadow-lg transition-shadow duration-300 h-[350px] flex flex-col">
                <img
                  src={event.image_full_url}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2 truncate">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm flex-grow line-clamp-2">
                    {event.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">{event.event_date}</p>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded self-start ${
                      event.type === "Upcoming"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {event.type === "Upcoming" ? "Upcoming" : "Latest"}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;
