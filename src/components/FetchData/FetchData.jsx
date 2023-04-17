// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/restaurants')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const newData = data.map(restaurant => ({
//     id: restaurant._id,
//     title: restaurant.title,
//     category: restaurant.category,
//     cuisine: restaurant.cuisine,
//     cities: restaurant.cities,
//     zone: restaurant.zone,
//     latitude: restaurant.latitude,
//     longitude: restaurant.longitude,
//   }));
  
// export default newData;
