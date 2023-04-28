import React, { useEffect } from "react";
const { kakao } = window;

function KakaoMap({ detailItem }) {
  useEffect(() => {
    const container = document.getElementById("map");
    // 맵을 표시할 HTML element
    const options = {
      center: new kakao.maps.LatLng(detailItem["위도"], detailItem["경도"]),
      // 지도의 중심좌표 초깃값 설정
      level: 3,
      // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);
    // 지도 생성 및 객체 리턴
    const markerPosition = new kakao.maps.LatLng(
      detailItem["위도"],
      detailItem["경도"]
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return <div id="map"></div>;
}

export default KakaoMap;
