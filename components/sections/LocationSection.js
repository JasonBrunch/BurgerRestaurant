"use client";

import React, { useState } from "react";
import styles from "./location.module.css";
import SOButton from "../buttons/SquareOutlineButton";
import PillButton from "../buttons/PillButton";

import dynamic from 'next/dynamic';
import MapProvider from '@/providers/MapProvider';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

const LocationSection = () => {
    const [address, setAddress] = useState({
        line1: "1234 GIBSONS ST.",
            city: "GIBSONS BC.",
            zip: "V0N 1V7",
            phone: "(604) 123-4567",
            email: "contact@gibsons.ca",
            coordinates: { lat: 49.39667, lng: -123.50772 }, 
    });

    const button1Click = () => {
        setAddress({
            line1: "1234 GIBSONS ST.",
            city: "GIBSONS BC.",
            zip: "V0N 1V7",
            phone: "(604) 123-4567",
            email: "contact@gibsons.ca",
            coordinates: { lat: 49.39667, lng: -123.50772 }, 
        });
    };

    const button2Click = () => {
        setAddress({
            line1: "5678 SECHELT AVE.",
            city: "SECHELT BC.",
            zip: "V0N 3A0",
            phone: "(604) 765-4321",
            email: "contact@sechelt.ca",
            coordinates: { lat: 49.47448, lng: -123.75406 },
        });
    };

    const getDirectionsClick = () => {
        const { lat, lng } = address.coordinates;
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <section id="location" className={styles.section}>
            <h2>LOCATIONS</h2>
            <div className={styles.buttonContainer}>
                <SOButton text="GIBSONS" onClick={button1Click} />
                <SOButton text="SECHELT" onClick={button2Click} />
            </div>
            <h4 className="dark-text center-text">
                {address.line1} <br />
                {address.city} <br />
                {address.zip} <br />
                {address.phone} <br />
                EMAIL: {address.email}
            </h4>
            <div className={styles.mapComponent}>
                <MapProvider>
                    <MapComponent coordinates={address.coordinates} />
                </MapProvider>
            </div>



            <PillButton onClick={getDirectionsClick} />


        </section>
    );
};

export default LocationSection;