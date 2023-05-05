import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";

function Visit() {
  let reviewData = useSelector((state) => state.review);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: { zIndex: 1000 },
  };

  // 모달이 열릴 때, 스크린 리더가 모달 오픈 전에 렌더링된 컨텐츠를 읽지 않도록 appElement를 지정
  Modal.setAppElement("#root");

  // swiper navigation 버튼을 slide 영역 바깥으로 빼기 위한 함수
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  // 후기 카드 선택 시 modal 오픈
  const [modalContent, setModalContent] = useState(reviewData);

  const handleCardClick = (item) => {
    setModalContent(item);
    setModalIsOpen(true);
  };

  return (
    <>
      <section className="visit mw">
        <div className="visitTitle">
          <h2>방문후기</h2>
          <p className="visitText">
            문화 시설을 방문하신 분들의 다양한 후기를 볼 수 있는 공간입니다:)
          </p>
        </div>
        <div className="visitReview">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            ref={swiperRef}
            {...params}
            breakpoints={{
              1200: { slidesPerView: 4, spaceBetween: 30 },
              960: { slidesPerView: 3, spaceBetween: 30 },
              520: { slidesPerView: 2, spaceBetween: 20 },
            }}
            className="mySwiper visitReviewCon"
          >
            {reviewData.map((item) => (
              <SwiperSlide
                className="swiper-slide"
                key={item.id}
                onClick={() => handleCardClick(item)}
              >
                <div className="swiper-slide-imgCon">
                  <img
                    src={`${process.env.PUBLIC_URL}${item.img}`}
                    alt="review_img1"
                  />
                  <span>크게보기</span>
                </div>
                <div className="swiper-slide-contents">
                  <span>{item.title}</span>
                  <span>{item.name}</span>
                  <span>{item.rating}</span>
                  <span>{item.site}</span>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev" onClick={handlePrevClick}></div>
          <div className="swiper-button-next" onClick={handleNextClick}></div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          appElement={document.getElementById("root")}
        >
          <button onClick={() => setModalIsOpen(false)} className="btnClose">
            닫기 X
          </button>
          <div className="madalInfo">
            <div className="modalImgCon">
              <img
                src={`${process.env.PUBLIC_URL}${modalContent.img}`}
                alt="review_img1"
              />
            </div>
            <div className="modalText">
              <span>{modalContent.title}</span>
              <span>성함: {modalContent.name}</span>
              <span>
                평점: <span>{modalContent.rating}</span>
              </span>
              <span>장소: {modalContent.site}</span>
            </div>
          </div>
          <p className="modalText2">{modalContent.text}</p>
        </Modal>
        <div className="detailFooter">
          <div className="footerImg">
            <img
              src={`${process.env.PUBLIC_URL}/img/Flower_img2.png`}
              alt="detailFooterImg"
            />
          </div>
          <p className="rights">ⓒ 2023. Dahyun Jeong all rights reserved</p>
        </div>
      </section>
    </>
  );
}

export default Visit;
