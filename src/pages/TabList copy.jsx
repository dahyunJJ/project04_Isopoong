import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PaginationNum from "./PaginationNum";

function TabList({ list }) {
  // 추가
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(7);
  const [currentData, setCurrentData] = useState(list.slice(0, itemsPerPage));

  // const currentData = list.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentData(list.slice(indexOfFirstItem, indexOfLastItem));
  };

  // 카테고리 분류
  let exhibition = list.filter((a) => a["카테고리2"] === "전시/기념관");
  let movie = list.filter((a) => a["카테고리2"] === "영화/연극/공연");
  let tour = list.filter((a) => a["카테고리2"] === "관광지");
  let scenicspots = list.filter((a) => a["카테고리2"] === "명승지");

  return (
    <>
      <section className="tabmenu">
        <div className="cateBtns">
          <button
            onClick={() => {
              setCurrentData(list);
            }}
          >
            전체
          </button>
          <button
            onClick={() => {
              setCurrentData(exhibition);
            }}
          >
            전시/기념관
          </button>
          <button
            onClick={() => {
              setCurrentData(movie);
            }}
          >
            영화/연극/공연
          </button>
          <button
            onClick={() => {
              setCurrentData(tour);
            }}
          >
            관광지
          </button>
          <button
            onClick={() => {
              setCurrentData(scenicspots);
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
              <Link
                to={`/detail/${item["시설명"]}`}
                className="detailBtn"
              ></Link>
            </div>
          ))}
          <PaginationNum
            setCurrentData={setCurrentData}
            itemsPerPage={itemsPerPage}
            totalItems={list.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
}

export default TabList;
