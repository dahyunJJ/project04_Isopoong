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

  let reviewItem = reviewData.find((item, i) => {
    return item.id === reviewData[i].id;
  });
  console.log(reviewItem);

  const [modalContent, setModalContent] = useState();

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
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper visitReviewCon"
          >
            {reviewData.map((item) => (
              <SwiperSlide
                className="swiper-slide"
                key={item.id}
                onClick={() => setModalIsOpen(true)}
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
        </div>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          This is Modal content
          <button onClick={() => setModalIsOpen(false)}>Modal close</button>
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
