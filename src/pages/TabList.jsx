import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Paginations from "./Paginations";

function TabList({ list }) {
  let [newlist, setNewlist] = useState([]);

  // pg 추가
  let [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  useEffect(() => {
    filterList("전체");
  }, [list]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = newlist.slice(indexOfFirstItem, indexOfLastItem);

  // 카테고리 분류
  function filterList(category) {
    if (category === "전체") {
      setNewlist(list);
    } else setNewlist(list.filter((a) => a["카테고리2"] === category));
  }

  return (
    <>
      <section className="tabmenu">
        <div className="cateBtns">
          <button
            onClick={() => {
              filterList("전체");
              setCurrentPage(1);
            }}
          >
            전체
          </button>
          <button
            onClick={() => {
              filterList("전시/기념관");
              setCurrentPage(1);
            }}
          >
            전시/기념관
          </button>
          <button
            onClick={() => {
              filterList("영화/연극/공연");
              setCurrentPage(1);
            }}
          >
            영화/연극/공연
          </button>
          <button
            onClick={() => {
              filterList("관광지");
              setCurrentPage(1);
            }}
          >
            관광지
          </button>
          <button
            onClick={() => {
              filterList("명승지");
              setCurrentPage(1);
            }}
          >
            명승지
          </button>
        </div>
        <div className="tabCon">
          {currentData.map((item, i) => (
            <div className="tabList" key={i}>
              <span>{item["시도 명칭"]}</span>
              <span>{item["시설명"]}</span>
              <span>{item["도로명주소"]}</span>
              <span>{item["전화번호"]}</span>
              <span>{item["입장 가능 나이"]}</span>
              <Link to={`/detail/${item.시설명}`} className="detailBtn"></Link>
            </div>
          ))}
          <div>
            <Paginations
              itemsPerPage={itemsPerPage}
              totalItems={newlist.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TabList;
