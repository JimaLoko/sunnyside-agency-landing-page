import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../images/desktop/image-gallery-milkbottles.jpg"
import slide2 from "../../images/desktop/image-gallery-orange.jpg"
import slide3 from "../../images/desktop/image-gallery-cone.jpg"
import slide4 from "../../images/desktop/image-gallery-sugarcubes.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { SwiperCss } from "./style";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, EffectCoverflow } from "swiper";

const Galery = () => {
  const [slide, setSlide] = useState(0)
  const [setThumbsSwiper] = useState(null);

  window.addEventListener('resize', () => {
    window.innerWidth <= 700 ? setSlide(3) : setSlide(4)
  })

  return (
    <SwiperCss>
      <Swiper
        effect={"coverflow"}
        onSwiper={setThumbsSwiper}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={0}
        slidesPerView={!slide ? 3 : slide}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="milk" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="orange" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="cone" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="sugur cubes" />
        </SwiperSlide>
      </Swiper>
    </SwiperCss>
  );
}
export default Galery
