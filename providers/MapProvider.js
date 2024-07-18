// providers/MapProvider.js

'use client';

import { useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const libraries = ['places', 'drawing', 'geometry'];

const MapProvider = ({ children }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <p>Error loading Google Maps</p>;

  if (!isLoaded) return <p>Loading Google Maps...</p>;

  return children;
};

export default MapProvider;