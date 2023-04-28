import { useSelector } from "react-redux";

function NearbyArea({ detailItem }) {
  console.log(detailItem);
  let data = useSelector((state) => state.data);

  let nearList = data.filter((a) => a["시도 명칭"] === data["시도 명칭"]);
  console.log(nearList);
  return (
    <>
      <div className="NearbyArea">
        <h2>해당 지역 문화시설</h2>
        <div className="NearbyArea_list">
          <div>리스트</div>
          <div>리스트</div>
          <div>리스트</div>
          <div>리스트</div>
        </div>
      </div>
    </>
  );
}

export default NearbyArea;
