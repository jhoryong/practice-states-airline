const Flight = ({ departure, destination, departureTimes, arrivalTimes }) => {
  return (
    <tr>
      <td className="col">π« {departure}</td>
      <td className="col">π¬ {destination}</td>
      <td className="col">{departureTimes}</td>
      <td className="col">{arrivalTimes}</td>
      <td className="col">
        <button>μμ½νκΈ°</button>
      </td>
    </tr>
  );
};

export default Flight;
