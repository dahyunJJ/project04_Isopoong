import { useSelector } from "react-redux";

function HospitalInfo({ detailItem }) {
  let hospital = useSelector((state) => state.hospital);

  let hospitalList = hospital.filter(
    (a) =>
      a.addr.split(" ")[0] === detailItem["시도 명칭"] &&
      a.addr.split(" ")[1] === detailItem["시군구 명칭"]
  );
  console.log(hospitalList);

  return (
    <>
      <div className="HospitalInfo">
        <h2>{`${detailItem["시군구 명칭"]}`} 주변 의료시설</h2>
        {!hospitalList || hospitalList.length === 0 ? (
          <div className="nullText">해당 시설 주변 대형(상급)병원 없음</div>
        ) : (
          hospitalList.map((item, i) => (
            <div className="Hospital_list" key={i}>
              <span>{item.clCdNm}</span>
              <span>{item.yadmNm}</span>
              <span>{item.addr}</span>
              <span>{item.telno}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HospitalInfo;
