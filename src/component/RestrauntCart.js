import { IMG_CON_URL} from '../constants';

const RestrauntCart = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
  }) =>{
    return (
      <div className="card">
        <img src={ IMG_CON_URL 
          + cloudinaryImageId}
          />
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{lastMileTravelString} Mintins</p>
      </div>
    )
  }

  export default RestrauntCart;