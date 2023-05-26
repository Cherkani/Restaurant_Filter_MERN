import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownMenu = ({ onCitySelect }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Récupérer les données des villes depuis la base de données
    const fetchCities = async () => {
      try {
        const response = await axios.get('https://backend-seven-virid.vercel.app/api/cities'); 
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, []);

  return (
    <select
      className="form-control"
      onChange={(e) => onCitySelect(e.target.value)}
    >
      <option value='null' className="dropdown-item">-- Aucune ville --</option>
      {cities.map(city => (
        <option className="dropdown-item" value={city._id} key={city._id}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
