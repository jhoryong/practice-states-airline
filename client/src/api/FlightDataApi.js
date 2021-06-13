function getFlightList({ departure, destination } = {}){
  const endpoint = 'http://localhost:3001';
  const GET = '/flight';
  const depQuery = `departure=${departure}`;
  const desQuery = `destination=${destination}`;
  const url = `${endpoint}${GET}?${depQuery}&${desQuery}`;
  console.log(url);
  return fetch(url)
  .then(res => res.json())
  .then(data => data)
}

export default getFlightList;