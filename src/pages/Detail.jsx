import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import KakaoMap from "./KakaoMap";
import NearbyArea from "./NearbyArea";
import HospitalInfo from "./HospitalInfo";

function Detail() {
  let data = useSelector((state) => state.data);
  let { id } = useParams();
  console.log(id);

  let detailItem = data.find((item) => {
    return item.시설명 === id;
  });

  // 해당지역 근처 문화시설 리스트
  let aroundData = data.filter(
    (a) =>
      a["시도 명칭"] === detailItem["시도 명칭"] &&
      a.법정읍면동명칭 === detailItem.법정읍면동명칭
  );

  return (
    <>
      <section className="detail mw">
        <div className="breadcrumbs">
          <Link to="/">홈화면</Link>
          <Link to="/facility">시설검색</Link>
          <span>시설명</span>
        </div>
        <div className="areaInfo">
          <h2>시설 소개</h2>
          <div className="areaCon">
            <div className="infoWrap">
              <KakaoMap detailItem={detailItem} />
              <ul className="areaCon_list">
                <h3 className="listTitle">{detailItem.시설명}</h3>
                <li>
                  <p>주소</p>
                  <span>{detailItem["도로명주소"]}</span>
                </li>
                <li>
                  <p>전화번호</p>
                  <span>{detailItem["전화번호"]}</span>
                </li>
                <li>
                  <p>운영시간</p>
                  <span>{detailItem["운영시간"]}</span>
                </li>
                <li>
                  <p>연령제한</p>
                  <span>{detailItem["입장 가능 나이"]}</span>
                </li>
                <li>
                  <p>입장료</p>
                  <span>{detailItem["입장료 유무 여부"]}</span>
                </li>
                <li>
                  <p>편의 시설 정보</p>
                  <div>
                    <p> - {detailItem["무료주차 가능여부"]}</p>
                    <p> - {detailItem["가족 화장실 보유 여부"]}</p>
                    <p> - {detailItem["수유실 보유 여부"]}</p>
                    <p> - {detailItem["유모차 대여 여부"]}</p>
                  </div>
                </li>
                <li>
                  <p>홈페이지</p>
                  <div>
                    <span>{detailItem["홈페이지"]}</span>
                    <p>※ 자세한 정보 및 예약 안내는 홈페이지에서 확인하세요!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NearbyArea aroundData={aroundData} />
        <HospitalInfo detailItem={detailItem} />
      </section>
    </>
  );
}

export default Detail;
