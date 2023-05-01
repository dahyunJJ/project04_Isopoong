import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function NearbyArea({ aroundData }) {
  // h2 시설명 바인딩
  let aroundItem = aroundData.find((item, i) => {
    return item.시설명 === aroundData[i].시설명;
  });
  // console.log(aroundItem);

  // 페이지네이션
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [currentData, setCurrentData] = useState(aroundData);
  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  const MAX_PAGES_TO_SHOW = 10; // 최대 페이지 수
  const GROUP_SIZE = 10; // 그룹당 페이지 수
  let pageGroups = [];
  if (totalPages <= MAX_PAGES_TO_SHOW) {
    // 페이지 수가 MAX_PAGES_TO_SHOW 이하인 경우에는 전체 페이지를 표시합니다.
    for (let i = 1; i <= totalPages; i++) {
      pageGroups.push(
        <Pagination.Item
          key={i}
          active={i === activePage}
          onClick={() => setActivePage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  } else {
    const activeGroup = Math.floor((activePage - 1) / GROUP_SIZE);
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
          onClick={() => setActivePage((activeGroup - 1) * GROUP_SIZE + 1)}
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
          active={i === activePage}
          onClick={() => setActivePage(i)}
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
          onClick={() => setActivePage((activeGroup + 1) * GROUP_SIZE + 1)}
        >
          {"다음"}
        </Pagination.Item>
      );
    }

    pageGroups = [...prevGroup, ...currentGroup, ...nextGroup];
  }
  return (
    <>
      <div className="NearbyArea">
        <h2>{`${aroundItem.시설명}`} 근처 문화시설</h2>
        {currentData.slice(indexOfFirstItem, indexOfLastItem).map((item, i) => (
          <div className="NearbyArea_list" key={i}>
            <span>{item["시도 명칭"]}</span>
            <span>{item["시설명"]}</span>
            <span>{item["도로명주소"]}</span>
            <span>{item["전화번호"]}</span>
            <span>{item["입장 가능 나이"]}</span>
            <Link to={`/detail/${item.시설명}`} className="aroundBtn"></Link>
          </div>
        ))}
        <div>
          <Pagination>
            <Pagination.First onClick={() => setActivePage(1)} />
            <Pagination.Prev
              onClick={() => setActivePage(Math.max(activePage - 1, 1))}
            />
            {pageGroups}
            <Pagination.Next
              onClick={() =>
                setActivePage(Math.min(activePage + 1, totalPages))
              }
            />
            <Pagination.Last onClick={() => setActivePage(totalPages)} />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default NearbyArea;
