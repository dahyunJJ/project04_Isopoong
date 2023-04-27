import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

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
  //
  const pageNumbers = [];
  const totalItems = list.length;
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = pageNumbers.slice(startIndex, endIndex);
  const MAX_PAGES_TO_SHOW = 10; // 최대 페이지 수
  const GROUP_SIZE = 10; // 그룹당 페이지 수
  let pageGroups = [];
  if (totalPages <= MAX_PAGES_TO_SHOW) {
    // 페이지 수가 MAX_PAGES_TO_SHOW 이하인 경우에는 전체 페이지를 표시합니다.
    for (let i = 1; i <= totalPages; i++) {
      pageGroups.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  } else {
    const activeGroup = Math.floor((currentPage - 1) / GROUP_SIZE);
    // 현재 그룹에서 시작하는 페이지
    const startPage = activeGroup * GROUP_SIZE + 1;
    // 현재 그룹에서 끝나는 페이지
    const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

    // 현재 그룹 이전의 페이지
    const prevGroup = [];
    if (activeGroup !== 0) {
      prevGroup.push(
        <Pagination.Item
          key="prevGroup"
          onClick={() => setCurrentPage((activeGroup - 1) * GROUP_SIZE + 1)}
        >
          {"이전"}
        </Pagination.Item>
      );
    }

    // 현재 그룹의 페이지
    const currentGroup = [];
    for (let i = startPage; i <= endPage; i++) {
      currentGroup.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // 현재 그룹 이후의 페이지
    const nextGroup = [];
    if (activeGroup !== Math.floor(totalPages / GROUP_SIZE)) {
      nextGroup.push(
        <Pagination.Item
          key="nextGroup"
          onClick={() => setCurrentPage((activeGroup + 1) * GROUP_SIZE + 1)}
        >
          {"다음"}
        </Pagination.Item>
      );
    }

    pageGroups = [...prevGroup, ...currentGroup, ...nextGroup];
  }

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
          <div>
            <div>
              <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} />
                <Pagination.Prev
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                />
                {pageGroups}
                <Pagination.Next
                  onClick={() =>
                    setCurrentPage(Math.min(currentPage + 1, totalPages))
                  }
                />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TabList;
