const Flight = ({ departure, destination, departureTimes, arrivalTimes }) => {
  return (
    <tr>
      <td className="col">🛫 {departure}</td>
      <td className="col">🛬 {destination}</td>
      <td className="col">{departureTimes}</td>
      <td className="col">{arrivalTimes}</td>
      <td className="col">
        <button>예약하기</button>
      </td>
    </tr>
  );
};

export default Flight;
