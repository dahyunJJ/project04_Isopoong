import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import KakaoMap from "./KakaoMap";
import NearbyArea from "./NearbyArea";

function Detail() {
  // let seoul = useSelector((state) => state.seoul);
  let { id } = useParams();

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
            <KakaoMap />
            <div className="areaCon_list">
              <p>
                <span>시설명 :</span> 국립청주박물관
              </p>
              <p>
                <span>주소 :</span> 충청북도 청주시 상당구 명암로 143
              </p>
              <p>
                <span>전화번호 :</span> 043-229-6300
              </p>
              <p>
                <span>운영시간 :</span> 09:00~18:00
              </p>
              <p>
                <span>연령제한 :</span> 연령제한없음
              </p>
              <p>
                <span>입장료 :</span> 입장료 무료
              </p>
              <p>편의 시설 정보</p>
              <p> - 가족 화장실 없음</p>
              <p> - 수유실 있음</p>
              <p> - 유모차 대여 가능</p>
              <p>
                <span>홈페이지 :</span>{" "}
                https://cheongju.museum.go.kr/www/index.do
              </p>
              <p>자세한 정보 및 예약 안내는 홈페이지에서 확인하세요!</p>
            </div>
          </div>
        </div>
        <NearbyArea />
      </section>
    </>
  );
}

export default Detail;
