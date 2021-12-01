import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './Pages.css';

function App() {
  const [userID, setUserID] = useState(1);
  const [allTournaments, setAllTournaments] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/get/tournament/`)
    .then((response) => {
      console.log(response.data)
      setAllTournaments(response.data)
    })
  },[])

  return (

    <div className="App">
      <h1 className='player-text'>Tournaments</h1>
      {allTournaments.map(tournament =>
        <div
          key={tournament.matchId}> 
          <div className = "card">
            <p>Match ID <br /> {tournament.matchId}</p>
            <p>Date <br /> {tournament.date}</p>
            <p>Team 1 <br /> {tournament.team1}</p>
            <p>Team 2 <br /> {tournament.team2}</p>
            <p>Result <br /> {tournament.result}</p>
          </div>
        </div>
      )}
    </div>

  );
}

export default App;