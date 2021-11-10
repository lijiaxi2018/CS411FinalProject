import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './Pages.css';

function App() {
  const [userID, setUserID] = useState(1);
  const [queryResult1, setQueryResult1] = useState([]);
  const [queryResult2, setQueryResult2] = useState([]);
  const [displayedQuery, setDisplayedQuery] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/get/adv1/`)
    .then((response) => {
      console.log(response.data)
      setQueryResult1(response.data)
    })
  },[])

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/get/adv2/`)
    .then((response) => {
      console.log(response.data)
      setQueryResult2(response.data)
    })
  },[])

  const adv1 = () => {
    setDisplayedQuery(queryResult1);
    console.log()
  };

  const adv2 = () => {
    setDisplayedQuery(queryResult2);
  };

  return (

    <div className="App">

      <button onClick={() => { adv1(); }}> Advanced Query 1</button>
      <br/>
      <button onClick={() => { adv2(); }}> Advanced Query 2</button>

      <h1 className='player-text'>Current Advanced Query</h1>
      {displayedQuery.map(object =>
        <div
          key={object.teamName}> 
          <div className = "card">
            <p> Attribute 1 <br /> {object[Object.keys(queryResult1[0])[0]]}</p>
            <p> Attribute 2 <br /> {object[Object.keys(queryResult1[0])[1]]}</p>
            </div>
        </div>
      )}


    </div>

  );
}

export default App;