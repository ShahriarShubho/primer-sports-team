import React from 'react';
import { useHistory } from 'react-router';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {
    const {idTeam, strTeam, strCountry, strTeamBadge, strSport} = props.team
    
    const history = useHistory();
    const showTeamDetails = (teamId) => {
        history.push(`/team/${teamId}`)
    }
    return (
        <div className="team-style col-sm-6 col-md-3">
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <p>Country : {strCountry}</p>
            <p>Sports Type : {strSport}</p>
            <button className="btn-lg btn-primary" onClick={() =>showTeamDetails(idTeam)}>Explorer <FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </div>
    );
};

export default Team;