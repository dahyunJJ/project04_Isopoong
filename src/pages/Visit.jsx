import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

function Visit() {
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
            <SwiperSlide className="swiper-slide">
              <div className="swiper-slide-imgCon">
                <img
                  src={`${process.env.PUBLIC_URL}/img/review_img1.jpg`}
                  alt="review_img1"
                />
              </div>
              <div className="swiper-slide-contents">
                <span>title</span>
                <span>name</span>
                <span>rating</span>
                <span>site</span>
                <p>text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Visit;
