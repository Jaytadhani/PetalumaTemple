import React, { useState, useEffect } from "react";
import axios from "axios";
import hanumanchalisa from "../assets/youtube/hanumanchalisa.mp4";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const POLLING_INTERVAL = 60000; // Check every 60 seconds
const MAX_RESULTS = 5; // Number of videos to display when not live

function YouTubeLiveStream() {
  const [liveStreamId, setLiveStreamId] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkLiveStreamAndVideos = async () => {
      setIsLoading(true);
      try {
        // Check for live stream
        const liveResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`
        );

        if (liveResponse.data.items.length > 0) {
          setLiveStreamId(liveResponse.data.items[0].id.videoId);
          setChannelVideos([]);
        } else {
          setLiveStreamId(null);
          // Fetch recent videos if not live
          const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
          );
          setChannelVideos(videosResponse.data.items);
        }
        setError(null);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
        setError("Failed to fetch YouTube data. Please try again later.");
      }
      setIsLoading(false);
    };

    checkLiveStreamAndVideos();
    const interval = setInterval(checkLiveStreamAndVideos, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-orange-300 p-4 rounded-lg shadow-md">
        <p className="text-orange-800 font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-orange-300 p-4 rounded-lg shadow-md">
        <p className="text-orange-800 font-semibold">{error}</p>
      </div>
    );
  }

  if (liveStreamId) {
    return (
      <div className="bg-orange-300 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">Live Stream</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${liveStreamId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-300 p-4 rounded-lg shadow-md w-fit">
      <h2 className="text-2xl text-center font-bold text-orange-800 mb-4">Featured Video</h2>
      <div className="flex justify-center">
        <video className="w-320 h-180" controls>
          <source src={hanumanchalisa} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="text-2xl font-bold text-orange-800 mt-6 mb-4">Recent Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {channelVideos.map((video) => (
          <div key={video.id.videoId} className="bg-orange-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src={video.snippet.thumbnails.medium.url || "/placeholder.svg"}
              alt={video.snippet.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-orange-800 font-semibold mb-2 line-clamp-2">{video.snippet.title}</h3>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
}

export default YouTubeLiveStream;
