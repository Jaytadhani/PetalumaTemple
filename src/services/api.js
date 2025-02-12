import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const requestToken = async () => {
  try {
    const formdata = new FormData();
    formdata.append("grant_type", import.meta.env.VITE_GRANT_TYPE);
    formdata.append("client_id", import.meta.env.VITE_CLIENT_ID);
    formdata.append("client_secret", import.meta.env.VITE_CLIENT_SECRET);
    formdata.append("username", import.meta.env.VITE_USERNAME);
    formdata.append("password", import.meta.env.VITE_PASSWORD);
    formdata.append("scope", import.meta.env.VITE_SCOPE);

    const response = await fetch(`${baseUrl}/oauth/token`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formdata,
    });

    const data = await response.json();
    if (data.access_token) {
      return data.access_token;
    } else {
      throw new Error("Failed to retrieve token");
    }
  } catch (error) {
    console.error("Token Error:", error);
    throw new Error("Error fetching token");
  }
};

export const fetchEvents = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/api/events-list`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data?.events_list) {
      return response.data.events_list;
    } else {
      throw new Error("Invalid event data");
    }
  } catch (error) {
    console.error("Events API Error:", error);
    throw new Error("Failed to fetch events");
  }
};