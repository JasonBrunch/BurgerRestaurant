// components/MapComponent.js

'use client';

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '1000px',
  height: '350px',
};

const defaultCenter = {
  lat: 40.73061, // Replace with your restaurant's latitude
  lng: -73.935242, // Replace with your restaurant's longitude
};

const MapComponent = () => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={defaultCenter}
      zoom={15}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

export default MapComponent;