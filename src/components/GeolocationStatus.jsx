import React, { useState } from 'react';

  const GeolocationStatus = ({formData, setFormData}) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setFormData({...formData,geolocation: `${position.coords.latitude}, ${position.coords.longitude}`})
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className="sign-up-container">
      <button className="rounded bg-indigo-500 p-1 text-white" onClick={getLocation}>Get Location</button>
      
      <p>{status}</p>
      {/* {<h1>Coordinates</h1>} */}
      
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}

export default GeolocationStatus;






// import { useGeolocated } from "react-geolocated";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// function GeolocationStatus ({formData, setFormData}) {
//   // const [loc, setLoc] = useState();
//     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//         useGeolocated({
//             positionOptions: {
//                 enableHighAccuracy: false,
//             },
//             userDecisionTimeout: 5000,
//         });
//         if(coords) {
        
//           let loc = `${coords.latitude}, ${coords.longitude}`
     
//           setFormData({...formData,geolocation: loc})
//        };
     
//       // if(coords){
       
//       //   // setLoc(`${coords.latitude}, ${coords.longitude}`)
//       //   setFormData({...formData,geolocation: `${coords.latitude}, ${coords.longitude}`})
//       // }
//     return !isGeolocationAvailable ? (
//         <div>Your browser does not support Geolocation</div>
//     ) : !isGeolocationEnabled ? (
//         <div>Geolocation is not enabled</div>
//     ) : coords ?
//  (
      
//      <div className="sign-up-container">
      
//       <div><FontAwesomeIcon icon={faCircleCheck} fade />Location Captured</div>
//       <div>       
//         <table>
          
//           <tbody>
//               <tr>
//                   <td>latitude</td>
//                   <td>{coords.latitude}</td>
//               </tr>
//               <tr>
//                   <td>longitude</td>
//                   <td>{coords.longitude}</td>
//               </tr>
              
//           </tbody>
//       </table></div>

//      </div>
       
//     ) : (
//         <div className="sign-up-container"><FontAwesomeIcon icon={faSpinner} />Getting the location data&hellip; </div>
//     );
// };

// export default GeolocationStatus;