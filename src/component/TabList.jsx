function TabList({ list, item }) {
  console.log(list);
  return (
    <>
      <section className="tabmenu">
        <div className="cateBtns">
          <button>전체</button>
          <button>전시/기념관</button>
          <button>영화/연극/공연</button>
          <button>관광지</button>
          <button>명승지</button>
        </div>
        <div className="tabCon">
          {list.map((item) => (
            <div className="tabList" key={item["시설명"]}>
              <span>{item["시도 명칭"]}</span>
              <span>{item["시설명"]}</span>
              <span>{item["도로명주소"]}</span>
              <span>{item["전화번호"]}</span>
              <span>{item["입장 가능 나이"]}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TabList;
