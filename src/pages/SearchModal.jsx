import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchModal() {
  let data = useSelector((state) => state.data);

  let [modal, setModal] = useState();

  // 모달 검색 데이터
  let [searchData, setSearchData] = useState(
    data.filter((item) => item.시설명 === data.시설명)
  );

  return (
    <>
      <button
        className="btnSearch"
        onClick={() => {
          setModal("on");
        }}
      >
        <span className="searchIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="searchText">검색하기</span>
      </button>
      <div className={`searchModal ${modal === "on" ? "on" : ""}`}>
        <button
          className="closeBtn"
          onClick={() => {
            setModal();
          }}
        >
          <span>닫기</span>
          <i class="fa-solid fa-xmark fa-3x"></i>
        </button>
        <div className="searchInputBox">
          <p className="inputInfo">
            "<span>문화시설명</span>을 검색하세요"
          </p>
          <input
            type="text"
            className="searchInput"
            onChange={(e) => {
              setSearchData(
                data.filter((item) => item.시설명.includes(e.target.value))
              );
            }}
          />
        </div>
        <div className="searchList">
          {!searchData || searchData.length === data.length ? (
            <p>검색결과가 없습니다</p>
          ) : (
            searchData.map((item, i) => (
              <Link
                to={`/detail/${item.시설명}`}
                key={i}
                className="searchLink"
              >
                <div className="searchItem">
                  <span>{item["시도 명칭"]}</span>
                  <span>{item["시설명"]}</span>
                  <span>{item["도로명주소"]}</span>
                  <span>{item["전화번호"]}</span>
                  <span>{item["입장 가능 나이"]}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
