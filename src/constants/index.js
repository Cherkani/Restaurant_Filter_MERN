// import axios from "axios";

// const NewData = async () => {
//   try {
//     const response = await axios.get("http://127.0.0.1:3000/api/restaurants");
//     const data = response.data;
//     const dataLista = data.map((restaurant) => ({
//       id: restaurant._id,
//       title: restaurant.title,
//       category: restaurant.category,
//       cuisine: restaurant.cuisine,
//       cities: restaurant.cities,
//       zone: restaurant.zone,
//       latitude: restaurant.latitude,
//       longitude: restaurant.longitude,
//     }));
//     console.log(dataLista);

//     return dataLista;
//   } catch (error) {
//     console.error(error);
//     // Handle the error as appropriate (e.g. show error message, log error)
//     // Return a default value or throw an error if needed
//   }
// };

// export const dataList = await NewData();
/*import { useState,useEffect } from "react";
function Test(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:3000/api/restaurants").then((element)=>{
      return element.json()
    }).then(data=>{
      setData(data);
    })
  },[]);

    return (
      <p>HELLO</p>
    )
}*/

// const dataList=[];

// const getData=async (callback)=>{

//   fetch("http://127.0.0.1:3000/api/restaurants").then((element)=>{
//     return element.json()
//   }).then(data=>{
//       dataList=data;
//       callback(data)
//   })

// }

// await getData();

// import axios from "axios";

// const NewData = async () => {
//   try {

//     const response = await axios.get("http://127.0.0.1:3000/api/restaurants");
//     const data = response.json();
//     const dataLista = data.map((restaurant) => ({
//       id: restaurant._id,
//       title: restaurant.title,
//       category: restaurant.category,
//       cuisine: restaurant.cuisine,
//       cities: restaurant.cities,
//       zone: restaurant.zone,
//       latitude: restaurant.latitude,
//       longitude: restaurant.longitude,
//     }));
//     console.log(dataLista);

//     return dataLista;
//   } catch (error) {
//     console.error(error);
//     // Handle the error as appropriate (e.g. show error message, log error)
//     // Return a default value or throw an error if needed
//   }
// };

// const dataList =[NewData()];

export const categoryList = [
  {
    id: 1,
    value: "place",
    label: "🚩 Places",
  },
  {
    id: 2,
    value: "dish",
    label: "🍕 Dishes",
  },
];
export const categoryList2 = [
  {
    id: 1,
    value: "a",
    label: "🚩 a",
  },
  {
    id: 2,
    value: "b",
    label: "🍕 b",
  },
];

export const ratingList = [
  {
    id: 1,
    value: "1",
    label: "1🌟",
  },
  {
    id: 2,
    value: "2",
    label: "2🌟",
  },
  {
    id: 3,
    value: "3",
    label: "3🌟",
  },
  {
    id: 4,
    value: "4",
    label: "4🌟",
  },
  {
    id: 5,
    value: "5",
    label: "5🌟",
  },
];

// Appeler le composant NewData et obtenir les données formatées
export const dataList = [
  {
    id: 1,
    title: "door urban",

    category: "place",
    cuisine: "italian",
    rating: 4,
    price: 1000,
    coverSrc: "/images/places/italian.webp",
    cities: "",
    zone: "ab",
    latitude: 33.596774390233364,
    longitude: -7.67300131717932,
  },
];
