import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Modal from "./Modal";

function Main() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="main mw">
        <div className="mainTitle">
          <h2>사이트소개</h2>
          <p className="mainText">
            이 사이트는 유아 동반 가능한 문화 시설에 대한 정보를 한 눈에 볼 수
            있는 사이트입니다:)
          </p>
          <div>
            <button onClick={showModal} className="mainbtn">
              소개글
            </button>
            <Modal isOpen={modalOpen} onClose={closeModal} />
          </div>
        </div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper slideCon"
        >
          <SwiperSlide className="imgCon">
            <img
              src={`${process.env.PUBLIC_URL}/img/slide_img1.jpg`}
              alt="slideImg"
            />
          </SwiperSlide>
          <SwiperSlide className="imgCon">
            <img
              src={`${process.env.PUBLIC_URL}/img/slide_img2.jpg`}
              alt="slideImg"
            />
          </SwiperSlide>
          <SwiperSlide className="imgCon">
            <img
              src={`${process.env.PUBLIC_URL}/img/slide_img3.jpg`}
              alt="slideImg"
            />
          </SwiperSlide>
          <SwiperSlide className="imgCon">
            <img
              src={`${process.env.PUBLIC_URL}/img/slide_img4.jpg`}
              alt="slideImg"
            />
          </SwiperSlide>
        </Swiper>
        <div className="circleFlower circleFlower1">
          <img
            src={`${process.env.PUBLIC_URL}/img/circleFlower.png`}
            alt="circleFlower"
          />
        </div>
        <div className="circleFlower circleFlower2">
          <img
            src={`${process.env.PUBLIC_URL}/img/circleFlower.png`}
            alt="circleFlower"
          />
        </div>
        <p className="rights">ⓒ 2023. Dahyun Jeong all rights reserved</p>
      </section>
    </>
  );
}

export default Main;
