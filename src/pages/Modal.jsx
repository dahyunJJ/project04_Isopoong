import "../css/component.css";

function Modal({ isOpen, onClose }) {
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <button onClick={onClose} className="closeBtn">
        <span>닫기</span>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="mainModal">
        <div className="modalImgCon">
          <img
            src={`${process.env.PUBLIC_URL}/img/mainModal.png`}
            alt="mainModalImage"
          />
        </div>
        <div className="modalText">
          <p>
            전국에 있는 문화 시설 중 아이들을 위한 편의시설(수유실, 유모차
            대여)에 대한 정보를 검색할 수 있는 사이트입니다. <br />
            아이들과 좋은 추억을 만들고 싶은데 어딜 가야할지 늘 고민하시는
            엄마아빠들에게 도움이 되었으면 좋겠습니다:)
          </p>
          <p>
            <strong>참고자료</strong> <br />
            한국문화정보원_전국 가족 유아 동반 가능 문화시설 위치 데이터 <br />
            건강보험심사평가원_병원정보서비스
          </p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
