import React from "react";
import "../styles/global.css";
import {IconContext} from "react-icons";
import { BiPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiMap } from "react-icons/bi";


const Results = (props) => {

  const showResults = props.results.map((result) => (

    <div className="results-list-container" key={ result.PlaceID }>
        <div className="results-title-container">
          <img className="results-list-logo" src={ result.Logo }/>
          <div className="results-list-title-service">
          
          {result.ServiceURL ? 
          <p className="results-list-title"> <a href={ result.ServiceURL }>{ result.OrgName }</a></p> : 
          <p className="results-list-title">{ result.OrgName }</p>}
        
          <p className="results-list-service-description">{ result.ServiceDescription }</p>
          </div>
        </div>

        <div className="results-button-container">  
          { result.PhoneNo ? 
          <button className="results-list-button" type="button"><IconContext.Provider value={{ className: 'results-react-button-icon' }}>
            <a href={ "tel:" + result.PhoneNo }><BiPhone /> Call</a>
            </IconContext.Provider></button> : null }

          {result.ServiceURL ? 
          <button className="results-list-button" type="button">
            <IconContext.Provider value={{ className: 'results-react-button-icon' }}>
            <a href={ result.ServiceURL }>
          <BiChat /> Chat </a>
          </IconContext.Provider></button> : null }
          
          {result.EmailAddress ? 
          <button className="results-list-button" type="button"><IconContext.Provider value={{ className: 'results-react-button-icon' }}>
            <a class="mailto" href={"mailto:" + result.EmailAddress}><BiEnvelope /> Email</a>
            </IconContext.Provider></button> : null} 
        </div>

        {result.OpeningTime ? 
        <p className="results-list-sub-title"><IconContext.Provider value={{ className: 'results-react-icons-detail' }}> <BiPhone /> Phone Support:</IconContext.Provider></p> : null }
        <p className="results-list-service-detail">{result.OpeningTime}</p>
        
        {result.PhysicalAddress ? 
        <p className="results-list-sub-title"><IconContext.Provider value={{ className: 'results-react-icons-detail' }}> <BiMap /> Address:</IconContext.Provider></p> : null }
        <p className="results-list-service-detail">{result.PhysicalAddress}</p>
        

        <p className="results-list-needs-tag">{result.Needs}</p>
        <p className="results-list-personalisation-tag">{result.Personalisation}</p>

        {result.TypeOfSupport ? 
        <p className="results-list-sub-title">Types of Service:</p> : null }
        {result.TypeOfSupport ? 
        <li className="results-list-service-detail">{result.TypeOfSupport}</li>: null}
        
        {result.OrgDescription ? 
        <p className="results-list-sub-title">About</p> : null }
        <p className="results-list-service-detail">{result.OrgDescription}</p>
        
      
    </div>
  ));

  return (
    <div className="results-container">
      <h1 className="question-title">Search results</h1>
      {showResults}
    </div>
  );
};
export default Results;
