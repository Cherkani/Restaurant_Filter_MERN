import React from "react";
import "./styles.css";
import ListItem from "../List/ListItem";

const RestaurantList = ({ restaurants }) => {
  const groups = restaurants.reduce((acc, restaurant, i) => {
    const groupIndex = Math.floor(i / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(restaurant);
    return acc;
  }, []);

  return (
    <div className="list-wrap">
      {groups.map((group, i) => (
        <div key={i} className="row">
          {group.map((item) => (
            <div key={item.id} className="col-sm-4">
              <ListItem item={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
