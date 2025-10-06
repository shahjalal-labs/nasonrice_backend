//

export const getAirportDistance = async (from: string, to: string) => {
console.log(to, "[1;31mto in getDistance.ts at line 4[0m");
  console.log(from, "[1;31mfrom in getDistance.ts at line 4[0m");
  const apiKey = "d3d55eea-719e-4568-afa5-89e30cb8cc3a";
  const requestUrl = `https://api.apiverve.com/v1/airportdistance?iata1=${from}&iata2=${to}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);

  const distance = data?.data?.distanceKm || 100;

  const price = distance * 0.2;
  return price;
};
