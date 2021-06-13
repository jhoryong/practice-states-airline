import Flight from "./Flight";

const Table = ({ flightList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="col">출발</th>
          <th className="col">도착</th>
          <th className="col">출발 시각</th>
          <th className="col">도착 시각</th>
          <th className="col"></th>
        </tr>
      </thead>
      <tbody>
        {flightList.length === 0
          ? <tr><td className="no-results-msg">검색된 항공편이 없습니다</td></tr>
          : flightList.map((flight) => {
              return (
                <Flight
                  key={flight.uuid}
                  departure={flight.departure}
                  destination={flight.destination}
                  departureTimes={flight.departure_times}
                  arrivalTimes={flight.arrival_times}
                />
              );
            })}
      </tbody>
    </table>
  );
};

export default Table;
