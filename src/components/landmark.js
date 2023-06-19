import React from 'react'

export default function Landmark(props){
    return(
        //div for the whole card
        <div className='cardholder'>
            {/*div for image*/}
            <div className='imageholder'>
                <img className='image' src={props.landmarkdetails.image}></img>
            </div>
            {/*information for the landmark*/}
            <div>
                <div className='location-bar'>
                    <div><img className="locationImage" src={props.locationimage} ></img></div><div><p>{props.landmarkdetails.country} </p></div><div><a href={props.landmarkdetails.googlelocation}>View on google maps</a></div>
                </div>
                <div className='title'><h2>{props.landmarkdetails.Title}</h2></div>
                <div><h4>{props.landmarkdetails.startdate}-{props.landmarkdetails.enddate}</h4></div>
                <div><p>{props.landmarkdetails.description}</p></div>
            </div>
        </div>
    )
}