import FacilityTabMenu from "../component/FacilityTabMenu";

function Facility() {
  return (
    <>
      <section className="Facility mw">
        <div className="btnArea">
          <button>서울</button>
          <button>경기</button>
          <button>강원</button>
          <button>충청</button>
          <button>전라</button>
          <button>경상</button>
          <button>제주</button>
          <button>전국</button>
        </div>
        <div className="searchArea">
          <div className="secTitle">
            <h2>시설 검색</h2>
            <p>
              전국에 있는 유아 동반 가능한 문화시설 및 관광지를 검색할 수
              있습니다. 검색 된 내용을 클릭하시면 해당 시설에 대한 상세 정보를
              파악하실 수 있습니다:)
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/img/Flower_img1.png`}
              alt="Flower_img1"
            />
          </div>
          <div className="tabmenu">
            <FacilityTabMenu />
          </div>
        </div>
      </section>
    </>
  );
}

export default Facility;
