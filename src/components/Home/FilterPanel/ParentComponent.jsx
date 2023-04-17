import React, { useState } from 'react';
import axios from 'axios';
import DropdownMenu from './DropdownMenu';

const ParentComponent = ({ onZoneSelect }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [zones, setZones] = useState([]);

  const handleCitySelect = async (cityId) => {
    setSelectedCity(cityId);
    try {
      const response = await axios.get(`http://localhost:3000/api/zones/city/${cityId}`);
      setZones(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleZoneSelect = async (zoneId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/restaurants/zones/${zoneId}`);
      const selectedZone = response.data.find(zone => zone._id === zoneId);
      onZoneSelect(selectedCity, selectedZone);
      console.log(selectedZone)
    } catch (error) {
      console.error(error);
    }
  };

// ///
// const handleZoneSelect = async (zonId) => {
//   setSelectedCity(zonId);
//   try {
//     const response = await axios.get(`http://localhost:3000/api/restaurants/zones/${zonId}`);
//     setZones(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
  // const handleZoneSelect = (zoneId) => {
  //   const selectedZone = zones.find(zone => zone._id === zoneId);
  //   onZoneSelect(selectedCity, selectedZone); // Pass selected city and zone to Home component
  // };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className='flex-align'>
      <DropdownMenu onCitySelect={handleCitySelect} />
      {selectedCity && (
        <div>
          {zones.map(zone => (
            <button
              key={zone._id}
              className='btn btn-secondary'
              onClick={() => handleZoneSelect(zone._id)}
            >
              {zone.name}
            </button>
          ))}
        </div>
      )}
      <button
        style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
        className='btn btn-primary'
        onClick={handleReload}
      >
        Recharger
      </button>
    </div>
  );
};

export default ParentComponent;



// import React, { useState } from 'react';
// import axios from 'axios';
// import DropdownMenu from './DropdownMenu';

// const ParentComponent = () => {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [zones, setZones] = useState([]);

//   const handleCitySelect = async (cityId) => {
//     setSelectedCity(cityId);
//     try {
//       const response = await axios.get(`http://localhost:3000/api/zones/city/${cityId}`); // Modifier l'URL en fonction de votre route
//       setZones(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleReload = () => {
//     // Code de rechargement
//   };

//   return (
//     <div className='flex-align'>
//       <DropdownMenu onCitySelect={handleCitySelect} />
//       {/* Afficher les boutons associés aux zones de la ville sélectionnée */}
//       {selectedCity && (
//         <div>
//           {zones.map(zone => (
//             <button key={zone._id} className='btn btn-secondary'>
//               {zone.name}
//             </button>
//           ))}
//         </div>
//       )}
//       <button
//         style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
//         className='btn btn-primary'
//         onClick={handleReload}
//       >
//         Recharger
//       </button>
//     </div>
//   );
// };

// export default ParentComponent;
