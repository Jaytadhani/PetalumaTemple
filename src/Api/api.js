const BASE_URL = "https://backend-panel.ramdoota.us/api";

// Note: In a real application, you would store this securely, not in the code
let accessToken = "";

async function getAccessToken() {
  const response = await fetch(
    "https://backend-panel.ramdoota.us/oauth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "password",
        client_id: "2",
        client_secret: "rHISR6QujhIXbFM37junKwsc7hocbyVq4FowmAnS",
        username: "hitmystyle@gmail.com",
        password: "Test@123",
        scope: "*",
      }),
    }
  );

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

async function refreshToken(refreshToken) {
  const response = await fetch(
    "https://backend-panel.ramdoota.us/oauth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "2",
        client_secret: "rHISR6QujhIXbFM37junKwsc7hocbyVq4FowmAnS",
        scope: "*",
      }),
    }
  );

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

async function fetchWithAuth(url, options = {}) {
  if (!accessToken) {
    await getAccessToken();
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (response.status === 401) {
    // Token might be expired, try to refresh
    await refreshToken(); 
    return fetchWithAuth(url, options);
  }

  return response;
}


export async function getEventsList() {
  const response = await fetchWithAuth(`${BASE_URL}/events-list`);
  return response.json();
}

export async function getPastEventsList() {
  const response = await fetchWithAuth(`${BASE_URL}/past-events-list`);
  return response.json();
}

export async function getOurVision() {
  const response = await fetchWithAuth(`${BASE_URL}/vision_list`);
  return response.json();
}


export async function getLoggedInUser() {
  const response = await fetchWithAuth(`${BASE_URL}/user`);
  return response.json();
}

// Example usage
async function testAPI() {
  try {
    const events = await getEventsList();
    console.log("Events:", events);

    const pastEvents = await getPastEventsList();
    console.log("Past Events:", pastEvents);

    const OurVision = await getOurVision();
    console.log("Events:", OurVision);

    const user = await getLoggedInUser();
    console.log("Logged in user:", user);
  } catch (error) {
    console.error("API Error:", error);
  }
}

testAPI();
