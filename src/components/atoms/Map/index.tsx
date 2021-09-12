import React, { useEffect, useRef } from 'react';

import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { MapPin, Crosshair } from 'react-feather';
import { easeCubic } from 'd3-ease';
import ButtonCenterMap from '../ButtonCenterMap';


const TOKEN = process.env.REACT_APP_TOKEN_MAP;

interface MarkerProps {
    id: string,
    latitude: number,
    longitude: number
}

interface MapProps {
    initialWithMyPosition?: boolean;
    blockZoom?: boolean;
    markers?: MarkerProps[]
}

const settingsBlockZoom = {
    scrollZoom: false,
    touchZoom: false,
    doubleClickZoom: false
}


const Map: React.FC<MapProps> = ({ initialWithMyPosition, blockZoom = false, markers, ...props }) => {
    const mapRef = useRef(null)

    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 16,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
    });

    const success = (pos: any) => {
        var crd = pos.coords;

        const position = {
            latitude: crd.latitude,
            longitude: crd.longitude
        }

        setViewport(viewport => ({
            ...viewport,
            ...position
        }))
    }

    function error(err: any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function setMapCenter() {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    useEffect(() => {
        if (initialWithMyPosition) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, [initialWithMyPosition])

    return (
        <ReactMapGL
            {...viewport}
            {...settingsBlockZoom}
            ref={mapRef}
            mapboxApiAccessToken={TOKEN}
            width="100%"
            height="100%"
            onViewportChange={(viewport: any) => setViewport(viewport)}
        >
            {markers?.map((marker) => (
                <Marker
                    key={marker.id}
                    longitude={marker.longitude}
                    latitude={marker.latitude}
                >
                    <MapPin />
                </Marker>
            ))}

            <ButtonCenterMap onClick={setMapCenter}>
                <Crosshair />
            </ButtonCenterMap>
        </ReactMapGL>
    );
}

export default Map
