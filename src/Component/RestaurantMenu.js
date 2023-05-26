import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import useRestaurant from "./UseRestaurantMenu";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5270362&lng=77.13593279999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return (
    <div>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="img" />
    </div>
  );
};

export default RestaurantMenu;
