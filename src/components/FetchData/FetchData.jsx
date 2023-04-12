import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/restaurants')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  
  

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th> Nom</th>
            <th> Category</th>
            <th> Title</th>
            <th> Cuisine</th>
            <th> Title</th>
            <th> PriceMax</th>
            <th> Lat</th>
            <th> Long</th>
            <th> City</th>
            <th> Zone</th>
            





          </tr>
        </thead>
        <tbody>
            
          {data.map(restaurant => (
            

            <tr key={restaurant._id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>{restaurant.title}</td>
              <td>{restaurant.cuisine}</td>
              <td>{restaurant.latitude}</td>
              <td>{restaurant.longitude}</td>
              <td>{restaurant.zone}</td>

             




              

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
