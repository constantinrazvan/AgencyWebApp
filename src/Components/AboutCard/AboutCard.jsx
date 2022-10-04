import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './AboutCard.css';
//
const AboutCard = ( props ) => { 
    return ( 
        <> 
            <div className="aboutCard"> 
                <div className="title"> 
                    <h1 className="h1_title"> {props.title} </h1>
                </div>

                <div className="paragraph"> 
                    <p className="p_descriptions"> {props.description} </p>
                </div>
            </div>
        </>
    ); 
}

export default AboutCard; 