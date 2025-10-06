//

const getAirportDistance = async () => {
  const apiKey = "your_api_key_here";
  const requestUrl = "https://api.apiverve.com/v1/airportdistance";

  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

getAirportDistance();
