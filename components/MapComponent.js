// components/MapComponent.js

'use client';

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '1000px',
  height: '350px',
};



const MapComponent = ({ coordinates }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={coordinates}
      zoom={15}
    >
      <Marker position={coordinates} />
    </GoogleMap>
  );
};

export default MapComponent;