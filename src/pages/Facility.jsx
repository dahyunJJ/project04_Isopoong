import { useSelector } from "react-redux";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Pagination from "../component/Pagination";

import FacilityTabMenu from "../component/FacilityTabMenu";
import TabList from "../component/TabList";

function Facility() {
  let seoul = useSelector((state) => state.seoul);
  let gyeonggi = useSelector((state) => state.gyeonggi);
  let chungcheong = useSelector((state) => state.chungcheong);
  let gangwon = useSelector((state) => state.gangwon);
  let gyeongsang = useSelector((state) => state.gyeongsang);
  let jeju = useSelector((state) => state.jeju);
  let jeolla = useSelector((state) => state.jeolla);
  let MetCity = useSelector((state) => state.MetCity);
  // console.log(seoul);

  const [page, setPage] = useState(1); //페이지
  const limit = 8; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit;
  const postsToShow = seoul.slice(offset, offset + limit);

  return (
    <>
      <section className="Facility mw">
        <div className="secTitle">
          <h2>시설 검색</h2>
          <p>
            전국에 있는 유아 동반 가능한 문화시설 및 관광지를 검색할 수
            있습니다. <br /> 검색 된 내용을 클릭하시면 해당 시설에 대한 상세
            정보를 파악하실 수 있습니다:)
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/img/Flower_img1.png`}
            alt="Flower_img1"
            className="flowerImg"
          />
        </div>
        <Tabs
          defaultActiveKey="seoul"
          id="uncontrolled-tab-example"
          className="mb-3 tabCategory"
        >
          <Tab eventKey="seoul" title="서울">
            <TabList list={seoul} item={postsToShow} />
            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              totalCount={seoul.length}
            />
          </Tab>
          <Tab eventKey="gyeonggi" title="경기">
            <TabList list={gyeonggi} />
          </Tab>
          <Tab eventKey="gangwon" title="강원">
            <TabList list={gangwon} />
          </Tab>
          <Tab eventKey="chungcheong" title="충청">
            <TabList list={chungcheong} />
          </Tab>
          <Tab eventKey="jeolla" title="전라">
            <TabList list={jeolla} />
          </Tab>
          <Tab eventKey="gyeongsang" title="경상">
            <TabList list={gyeongsang} />
          </Tab>
          <Tab eventKey="jeju" title="제주">
            <TabList list={jeju} />
          </Tab>
          <Tab eventKey="MetCity" title="광역시">
            <TabList list={MetCity} />
          </Tab>
        </Tabs>
      </section>
    </>
  );
}

export default Facility;
