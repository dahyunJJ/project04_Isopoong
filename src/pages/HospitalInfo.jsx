import { useSelector } from "react-redux";

function HospitalInfo() {
  let hospital = useSelector((state) => state.hospital);
  console.log(hospital);
  return (
    <>
      <div className="HospitalInfo">
        <h2>근처 의료시설</h2>
        <div className="Hospital_list">
          <span>병원이름</span>
          <span>병원주소</span>
          <span>전화번호</span>
          <span>홈페이지</span>
        </div>
      </div>
    </>
  );
}

export default HospitalInfo;
