import RestaurantCard from "./RestaurantCard";
import { restaurantObj } from "./../utils/mockData";
import { useState } from "react";

const CardContainer = () => {
  const [restList, setRestList] = useState(restaurantObj);
  const filterRest = () => {
    const filteredList = restList.filter((res) => res.info.avgRating >= 4.5);
    setRestList(filteredList);
  };
  return (
    <div className="card-container">
      <div className="search">
        <button onClick={() => filterRest()} className="filter-btn">
          Top Rated Restaurants
        </button>
        {/* <input placeholder="Search"></input> */}
      </div>
      <div className="cards">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resName="Dominos" rating={"4.4 stars"} />
        <RestaurantCard resName="Pizza Hut" rating={"4 stars"} /> */}
      </div>
    </div>
  );
};
export default CardContainer;
