import { useState } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Basemaps  from '../components/Basemaps'; 

import '../App.css';




const MapComponent = () => {
    const state = {
        lat: 50.4501891,
        long: 30.5242872,
        zoom: 12,
        basemap: 'osm'
    }

    const {lat, long} = state;
    const center = [lat, long];

    const basemapDict = {
        osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        forest: "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png",
        // forest: "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}"
    }
    const [basemap, setBasemap] = useState(state.basemap);

    return (
        <MapContainer  className="main-map" center={center} zoom={state.zoom} scrollWheelZoom={false}>
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={basemapDict[basemap]}
            />
            <Basemaps basemap={basemap} onChange={setBasemap} />
            <Marker position={center}>
                <Popup>Какой то крутой текст!!!</Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent;