import React, { useEffect } from "react";
const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    // 맵을 표시할 HTML element
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      // 지도의 중심좌표 초깃값 설정
      level: 3,
      // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);
    // 지도 생성 및 객체 리턴
  }, []);

  return <div id="map"></div>;
}

export default KakaoMap;
