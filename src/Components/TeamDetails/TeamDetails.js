import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleIng from '../../Photo/male.png';
import femaleIng from '../../Photo/female.png';
import facebook from '../../Photo/Facebook.png';
import twitter from '../../Photo/Twitter.png';
import youTube from '../../Photo/YouTube.png';
import './TeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars, faFlag, faFutbol,} from '@fortawesome/free-solid-svg-icons'


const TeamDetails = () => {

    const {teamId} = useParams()
    
    const [teamDetails, setTeamDetails] = useState({})

    useEffect(() => {

        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
        .catch(err => alert("unexpected or wrong Team Id. Please type a valid team id"))
    }, [teamId])
    
    const {strTeam, strCountry, intFormedYear, strGender, strLeague, strSport, strDescriptionEN, strTeamBanner, strFacebook, strWebsite, strTwitter} = teamDetails
  
    return (
        <div className="team-details-container">
            <img className="banner-img" src={strTeamBanner} alt=""/>

         <div className="container d-flex justify-content-between bg-info team-info">
                <div>
                    <h3 className="text-center">{strTeam}</h3>
                    <p>Founding Year : {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> League : {strLeague}</p>
                    <p><FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}</p>
                </div>

                <div className="team-photo">
                    {strGender && (strGender === 'Male'? <img src={maleIng} alt=""/> : <img src={femaleIng} alt=""/>)}
                </div>
            </div>

            <div className="container">
                <h3>Description of team</h3>
                <p>{strDescriptionEN}</p>
            </div>

            <div className="text-center social-Icon d-flex justify-content-center p-5">
                <a href={`https://${strFacebook}`} target="blank"><p className="m-5"><img src={facebook} alt=""/>facebook </p></a>
                <a href={`https://${strTwitter}`} target="blank"><p className="m-5"><img src={twitter} alt=""/>twitter </p></a>
                <a href={`https://${strWebsite}`} target="blank"> <p className="m-5"><img src={youTube} alt=""/>Youtube </p></a>
            </div>
        </div>
    );
};

export default TeamDetails;