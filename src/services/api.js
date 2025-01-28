const API_URL = import.meta.env.VITE_API_URL;

export const fetchPetalumaEvents = async () => {
  const response = await fetch(`${API_URL}?action=fetchPetalumaEvents`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};
