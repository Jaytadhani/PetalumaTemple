import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { fetchEvents, requestToken } from "../services/api";
import Loader from "../Components/Loader";

const EventCard = ({ id, title, description, image_full_url, event_date, type }) => {
  return (
    <Link to={`/events/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-300 hover:shadow-lg transition-shadow duration-300">
        <img
          src={image_full_url}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-gray-500 mb-2">{event_date}</p>
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
              type === "Upcoming"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {type === "Upcoming" ? "Upcoming" : "Latest"}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Event = () => {
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

  if (loading) return <div><Loader/></div>;
  if (error) return <div>{error}</div>;

  const upcomingEvents = events.filter((event) => event.type === "Upcoming");
  const pastEvents = events.filter((event) => event.type === "Latest");

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Past Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Event;