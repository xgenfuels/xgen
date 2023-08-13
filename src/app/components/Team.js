"use client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        imgSrc: "AbhishekBorkar.png",
        name: "Abhishek D. Borkar",
        shortDesc: "Co-Founder ",
        linkSrc: "www.linkedin.com/in/𝗔𝗯𝗵𝗶𝘀𝗵𝗲𝗸-𝗕𝗼𝗿𝗸𝗮𝗿-555701129",
      },
      {
        imgSrc: "AjinkyaSalave.png",
        name: "Ajinkya S. Salve",
        shortDesc: "CEO & Co-Founder",
        linkSrc: "https://www.linkedin.com/in/ajinkya-salve-5457171ab",
      },
      {
        imgSrc: "PranavBochke.png",
        name: "Pranav P. Bodkhe",
        shortDesc: "Co-Founder ",
        linkSrc: "https://www.linkedin.com/in/pranav-bodakhe-a51137222/",
      }
    ]);
  }, []);
  const blocks = data.map((data, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="w-full text-center cursor-grab active:cursor-grabbing mb-12 bg-green-600 p-6 h-72 rounded-lg flex gap-2 flex-col items-center justify-center">
          <img
            src={`/assets/team/${data.imgSrc}`}
            className="w-28 rounded-full w-32 h-32"
          />
          <p className="text-white text-md">{data.name}</p>
          <p className="text-white text-sm mt-2">{data.shortDesc}</p>
          <a target="_blank" rel="noreferrer" href={data.linkSrc}>
            <img src="/assets/icons/linkedin.png" className="w-7" />
          </a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    // <div id="Team" className="pageLayout">
    //   <h1 className="text-center font-londrina text-3xl md:text-4xl font-bold">
    //     OUR TEAM
    //   </h1>
    //   <div className="flex items-center justify-center mt-16 md:mt-30">
    //     <Swiper
    //       data-aos="fade-up"
    //       slidesPerView={1}
    //       breakpoints={{
    //         640: {
    //           slidesPerView: 1,
    //         },
    //         1200: {
    //           slidesPerView: 3,
    //         },
    //       }}
    //       loop={true}
    //       modules={[Navigation, Pagination]}
    //       navigation
    //       pagination={{ clickable: true }}
    //       spaceBetween={20}
    //       className="testimonials clientsSwiper"
    //       centeredSlides={true}
    //       //   initialSlide={1}
    //     >
    //       {blocks}
    //     </Swiper>
    //   </div>
    // </div>

    <div id="Team" className="pageLayout">
    {/* Your title and Swiper setup... */}
    <div className="flex items-center justify-center mt-16 md:mt-30">
      <Swiper
        data-aos="fade-up"
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="testimonials clientsSwiper"
        centeredSlides={true}
        autoplay={{ delay: 2500 }}
        //   initialSlide={1}
      >
        {blocks}
      </Swiper>
    </div>
  </div>
  );
}
