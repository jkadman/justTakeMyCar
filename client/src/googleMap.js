import { GoogleMap, useLoadScript, LoadScript } from '@react-google-maps/api';
import { useMemo } from "react";
import React, { useEffect } from 'react';
// import loadGoogleMaps from './hooks/googlemapsloader.js';
import './googleMap.css'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
export default function Map() {
  <LoadScript
        googleMapsApiKey="process.env.REACT_APP_GOOGLE_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//   console.log('loaderror:', loadError)
//   console.log('isLoaded:', isLoaded)
// if (isLoaded) {
//   console.log('true')
//   return(
      
//     <div className="MApp">
//       {!isLoaded ? (
      
//         <h1>Loading... </h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}
//         />

//       )}
      
//     </div>
// ) 
// } else {
//   console.log('loaderror', loadError)
// }

// useEffect(() => {
//   const initializeMap = async () => {
//     try {
//       await loadGoogleMaps();
//       // Perform any actions that require the Google Maps API here
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 37.7749, lng: -122.4194 },
//         zoom: 12,
//       });
//     } catch (error) {
//       console.error('Failed to load Google Maps API:', error);
//     }
//   };

//   initializeMap();
// }, []);

// // Render your component as needed
// return (
//   <div>
//     {/* Your map component JSX */}
//     <div id="map" style={{ width: '400px', height: '400px' }}></div>
//   </div>
// );
  
} 
