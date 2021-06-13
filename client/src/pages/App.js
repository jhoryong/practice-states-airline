import '../styles/index.css'

import {useState, useEffect} from 'react'

import Search from './components/Search'
import Table from './components/Table'

import getFlightList from '../api/FlightDataApi'

//import FlightList from '../resource/flightlist'

function App() {
  const [searchValue, setSearchValue] = useState({});
  const [flightList, setFlightList] = useState([])
  
  function handleSearchValue(dep, des){
    setSearchValue({ departure: dep, destination: des })
  }

  // 'searchValue' state 가 변경되면 실행된다.
  useEffect(function() {
    getFlightList(searchValue)
    .then(data => {
      console.log(data)
      setFlightList(data)
    })
  }, [searchValue])

  return (
    <div>
      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search handleSearchValue={handleSearchValue}/>
        <Table flightList={flightList}/>
      </main>
    </div>
  )
}

export default App;
