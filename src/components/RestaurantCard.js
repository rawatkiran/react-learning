import { RES_URL } from "./../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // const { name, locality, areaName, avgRating, sla = {} } = resData?.info;
  return (
    <div className="rest-card">
      <h3>{resData.info?.name}</h3>
      <img className="res-img" src={RES_URL} />
      <h4>
        {resData.info?.locality},{resData.info?.areaName}
      </h4>
      <h4>{resData.info?.avgRating}</h4>
      <h4>{resData.info?.sla?.deliverTime}</h4>
    </div>
  );
};
export default RestaurantCard;
