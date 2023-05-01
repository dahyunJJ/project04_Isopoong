import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NearbyArea({ aroundData }) {
  console.log(aroundData);
  return (
    <>
      <div className="NearbyArea">
        <h2>해당 지역 문화시설</h2>
        {aroundData.map((item, i) => (
          <div className="NearbyArea_list" key={i}>
            <span>{item["시도 명칭"]}</span>
            <span>{item["시설명"]}</span>
            <span>{item["도로명주소"]}</span>
            <span>{item["전화번호"]}</span>
            <span>{item["입장 가능 나이"]}</span>
            <Link to={`/detail/${item.시설명}`} className="aroundBtn"></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default NearbyArea;
