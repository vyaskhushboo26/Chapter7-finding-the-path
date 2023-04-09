import { restrauntList } from "../constants";
import RestrauntCart from "./RestrauntCart";
import { useState, useEffect } from "react";
import Shimmer from "./Simmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  return restaurants.filter((result) =>
    result?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try{
  const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
    }
    catch{
      err => console.log(err)
      setErrorMsg(err);
    }
  }

  

  // Don't render component (Early return)
  console.log("render with body");
  if (!allrestaurants) return null;


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {console.log(searchText)}
        <button
          className="search-btn"
          onClick={() => {
            if (searchText !== "") {
              const data = filterData(searchText, allrestaurants);
              setFilteredRestaurants(data);
              if(data.length === 0){
                setErrorMsg('No Matches Found')
              }
            }
            else{
              if(errormsg) setErrorMsg('');
              setFilteredRestaurants(allrestaurants);
            }
          }}
        >
          Search
        </button>
      </div>
      { errormsg && 
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errormsg}</span>
      </div> 
    }
      {
        allrestaurants.length === 0 ? (<Shimmer/>) :(
        <div className="restranunt-list">
        {filteredrestaurants.map((restraunt) => {
          return <Link to={"/restaurant/" + restraunt.data.id} key={restraunt.data.id} className="link" ><RestrauntCart {...restraunt.data} /></Link> ;
        })}
      </div>)}
    </>
  );
};

export default Body;
