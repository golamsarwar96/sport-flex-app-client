import slide1 from "../assets/largest-sports-equipment-companies.jpg.png";
import slide2 from "../assets/Fotolia_4437974_sport.png";
import slide3 from "../assets/sports-tools.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-[70vh] mx-auto">
      {" "}
      {/* Set height to 60% of the viewport */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <img src={slide3} className="w-full h-full object-cover" />
          <h1 className="lg:text-5xl md:text-3xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-[365px] md:left-24 left-20 md:top-36 top-36 lg:top-40 text-center bg-amber-400 text-black p-5">
            Buy All Kinds Of Sports Accessories In Affordable Price
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-full h-full object-cover" />
          <h1 className="lg:text-5xl md:text-3xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-[365px] md:left-24 left-20 md:top-36 top-36 lg:top-[180px] text-center bg-amber-400 text-black p-5">
            Create Account And Make Your Own Equipment List
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} className="w-full h-full object-cover" />
          <h1 className="lg:text-5xl md:text-3xl text-xl absolute lg:w-1/2 md:w-3/4 w-[60%] mx-auto lg:left-[365px] md:left-24 left-20 md:top-36 top-36 lg:top-40 text-center bg-amber-400 text-black p-5">
            Buy The Best Sports Equipment In Few Simple Clicks
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
