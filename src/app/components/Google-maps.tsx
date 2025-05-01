"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

interface Marker{
 lat: number
 lng: number
 title: string
}


interface GoogleMapsProps {
 markers?: Marker[];
}



function GoogleMaps({markers}: GoogleMapsProps) {

  const mapRef = useRef<HTMLDivElement>(null)




  useEffect(() => {
    
    const initLoader = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "beta",
        libraries: ["places"],
      });
      const { Map } = await loader.importLibrary("maps");

      const location ={
        lat: -16.620219,
        lng: -72.708549

      }

      const options: google.maps.MapOptions={

        center: location,
        zoom: 19,
        mapId: "Mercado",
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "water",
            stylers: [{ color: "#46bcec" }],
          },
          {
            featureType: "landscape",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "road",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
        ],

      }

      const map = new Map(mapRef.current as HTMLDivElement, options);

      const { AdvancedMarkerElement } =await loader.importLibrary("marker") as google.maps.MarkerLibrary;

     markers?.forEach((marker) => {
        new AdvancedMarkerElement({
          map: map,
          position: { lat: marker.lat, lng: marker.lng },
          title: marker.title,
         
        });
     })

      




    };

    initLoader();
  }, []);

  return <div className="w-full h-full" ref={mapRef} />;
}

export default GoogleMaps;
