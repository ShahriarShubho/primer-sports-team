import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import Team from '../Teams/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])

    return (
        <div className="home-bg-color">
        <div className="home-img">
        <h1>Premier Sports Team</h1>
        </div>
        <div className="container">
            <h1 className="text-lg-center pt-5 font-weight-bold font-italic">Team List</h1>
            <div className="row ml-3">
            {teams.map(team => <Team key={team.idTeam} team={team}></Team>)}
        </div>
        </div>
        </div>
    );
};

export default Home;