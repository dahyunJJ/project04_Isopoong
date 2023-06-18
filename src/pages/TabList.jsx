import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Paginations from "./Paginations";
import SearchModal from "./SearchModal";

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

  // 카테고리 버튼 on 클래스 효과를 스크립트 함수로 처리
  let navItem = document.querySelectorAll(".nav-item> button");
  let catebtns = document.querySelectorAll(".cateBtns button");
  let btnF = document.querySelectorAll(".cateBtns button:first-child");
  // console.log(btnF);

  navItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      catebtns.forEach((btn) => {
        btn.style.cssText = `background-color: transparent; color: #486284; `;
      });
      btnF.forEach((btn2) => {
        btn2.style.cssText = `background-color: #486284; color: #fffffc;`;
      });
    });
  });

  catebtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.target);
      catebtns.forEach((btn) => {
        btn.style.cssText = `background-color: transparent; color: #486284; `;
      });
      e.target.style.cssText = `background-color: #486284; color: #fffffc;`;
    });
  });

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
        <SearchModal />
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
              className="pagination"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TabList;
