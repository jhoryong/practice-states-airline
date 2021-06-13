const flightList = require( '../data/flightList')

module.exports = {
  findFlight: (req, res) => {
    const query = req.query;
    console.log(query);
    const queryLength = Object.keys(query).length;

    if (queryLength > 0){
      const filtered = flightList.filter(flight => {
        for (let prop in query) {
          if (flight[prop] !== query[prop])
            return false;
        }
        return true;
      })
      return res.json(filtered);
    } else {
      return res.status(400).end('Bad Request');
    }
    
  }
}