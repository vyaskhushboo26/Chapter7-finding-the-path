// const Shimmer = () => {
//     return(
//         <div className="restranunt-list">
//             {
//             Array(10).fill("").map((e,index) => 
//                 (e = <div key={index} className="shimmer-card"></div>))
//             }
//         </div>
//     );
// };

// export default Shimmer ;

import { SHIMMER_RES_CARDS_COUNT } from "../constants";

const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element, index) => {
        return <CardShimmer key ={index} />
      }) }
    </div>   
  )
}

export default Shimmer;