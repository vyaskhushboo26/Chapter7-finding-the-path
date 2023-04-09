import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../constants";
import Shimmer from "./Simmer";

const RestrauntMenu = () => {
  //    destructure + read dynemic URL param
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5408295&lng=73.9337007&restaurantId=" +resId + "&submitAction=ENTER"
    );
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+ resId+"&submitAction=ENTER");
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return (!restaurant) ? <Shimmer /> : (
    <div className="menu-container">
      <div className="menu-list1">
        <h1>Restraunt ID: {resId}</h1>
        <img
          src={
            IMG_CON_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />

        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <p>
          {restaurant?.cards[0]?.card?.card?.info?.areaName} ,
          {restaurant?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
        </p>
        <p>{restaurant?.cards[0]?.card?.card?.info?.feeDetails?.message}</p>
        <h4>{restaurant?.cards[0]?.card?.card?.info?.avgRatingString} Star</h4>
        <h3>
          cuisines :{" "}
          {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}
        </h3>
      </div>
      <div >
        <h2>Menu</h2>
        <div className="menu-list2">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards.map(
            (item) => (
              <div key={item?.card?.info?.id}>
                <h3>
                  {/* {item?.card?.info?.isVeg}  */}
                  {item?.card?.info?.name}
                </h3><br/>
                <span>{(item?.card?.info?.isVeg === '1') ? 'Veg' : 'Non-Veg'}</span><br/>
                <span>{item?.card?.info?.description}</span>

                <div>
                    <img src={IMG_CON_URL + item?.card?.info?.imageId}  className="items-img"/>

                </div>
              </div>
            
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
