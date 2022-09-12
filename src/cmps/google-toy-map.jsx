import React from "react";
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function GoogleToyMap() {

    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
    const zoom = 11
    const citiesPos = [
        { cityName: 'Tel - Aviv', pos: { lat: 32.0750, lng: 34.7749 } },
        { cityName: 'Hadera', pos: { lat: 32.4340, lng: 34.9197 } },
        { cityName: 'Bat - Yam', pos: { lat: 32.0132, lng: 34.7480 } }
    ]
    const onClick = ({ lat, lng }) => {
        setCoordinates({ lat, lng })
    }

    const onChangeLoc = ({ lat, lng }) => {
        setCoordinates({ lat, lng })
    }

    return (
        // Important! Always set the container height explicitly
        <div className="map-container">
            <GoogleMapReact
                onClick={onClick}
                bootstrapURLKeys={{ key: "AIzaSyDvMT3VockvtvfGVxJMzmnO3RIHelOgggU" }}
                center={coordinates}
                defaultZoom={zoom}
            >

                {citiesPos.map(({ pos: { lat, lng } }) => {
                    return (
                        <AnyReactComponent
                            lat={lat}
                            lng={lng}
                            key={lat}
                            text='📍'
                        />
                    )
                })}

            </GoogleMapReact>

                <span>We are located in :</span>
            <div className="btns-container">
                {citiesPos.map(city => {
                    return (<button className="city-btn" key={city.pos.lat} onClick={() => { onChangeLoc(city.pos) }}>
                        {city.cityName}
                    </button>)
                })}
            </div>
        </div >
    );
}
