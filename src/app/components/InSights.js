"use client";


// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-cube"; // Import any additional styles you need
// import "swiper/css/effect-flip"; // Import any additional styles you need
// import "swiper/css/effect-coverflow"; // Import any additional styles you need
// import "swiper/css/effect-fade"; // Import any additional styles you need

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// export default function InSights() {
//   const [data, setData] = useState([
//     {
//       src: "img1.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img2.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img3.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img4.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img5.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img6.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//     {
//       src: "img7.jpg",
//       title:
//         "illum aliquid corporis labore laborum? Expedita tempore sint suscipit molestias nulla quisquam quas. Nam labore voluptatibus iure nihil? Eveniet ducimus ipsa tenetur corporis ut corrupti, dolorum consectetur eligendi minima dignissimos officiis, vitae sed et harum. Quo ea veritatis nihil voluptatem est reprehenderit, ut consectetur at ipsam esse.S",
//     },
//   ]);

//   const blocks = data.map((item, index) => (
//     <SwiperSlide key={index} className="flex items-center justify-center">
//       <img
//         src={`/assets/insights/${item.src}`}
//         alt={item.title}
//         className="rounded-lg w-[100vw] lg:w-[70vw]"
//       />
//     </SwiperSlide>
//   ));

//   return (
//     <div className="pageLayout">
//       <h1 className="text-center font-londrina text-3xl md:text-4xl font-bold">
//         INSIGHTS
//       </h1>

//       <div className="flex items-center justify-center backdrop-blur-md mt-16 md:mt-30">
//         <Swiper
//           autoplay={{
//             delay: 2500, // Set the delay to 2500 milliseconds (2.5 seconds)
//           }}
//           slidesPerView={1}
//           loop={true}
//           navigation={true}
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           centeredSlides={true}
//           initialSlide={0}
//         >
//           {blocks}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube"; // Import any additional styles you need
import "swiper/css/effect-flip"; // Import any additional styles you need
import "swiper/css/effect-coverflow"; // Import any additional styles you need
import "swiper/css/effect-fade"; // Import any additional styles you need

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function InSights() {
  const [data, setData] = useState([
    {
      src: "img1.jpg",
      title:
        "Igniting Brilliance: Celebrating our Success as 1st Runner-up at Ignited Innovators of India, hosted by College of Engineering Pune (COEP). Our journey through the 'Sustainable and Green Energy' themed competition was a true spark of genius. Amongst 100+ state-level participants, we proudly emerged triumphant, a testament to our dedication and innovative spirit",
    },
    {
      src: "img2.jpg",
      title:
        "The Entrepreneurial Victory: Capturing the Moment as Our Team Graciously Accepts the Winning Prize at BiZ QuoTiEnt, an Entrepreneurship Extravaganza organized by TiE University Silicon Valley, Pune Chapter. A Triumph in the Young Entrepreneurship Arena, Embarking on a Journey of Innovation and Success",
    },
    {
      src: "img3.jpg",
      title:
        "Proud Finalist on the National Stage: Sharing my Vision at the Action Plan Competition, Hosted by Abhyuday IIT Bombay. Standing Tall Amongst 1500+ participants, as Ideas Transform into Action and Dreams Forge Ahead.",
    },
    {
      src: "img4.jpg",
      title:
        "Championing Innovation: Sharing Our Vision at National stage of 'BootCamp', the Prestigious Competition by IIT Madras. Among 2500+ Bright Minds, We are Honoured to Present My Innovative Ideas, Fueled by Passion and Determination",
    },
    {
      src: "img5.jpg",
      title:
        "Icons of Entrepreneurship: Gathering of Visionaries and Dignitaries from TiE University Silicon Valley, Pune Chapter. A Powerhouse of Great Entrepreneurs Shaping the Future.",
    },
    {
      src: "img6.jpg",
      title:
        "Basking in the Spotlight: Radiating Prestige as we Accept Honors on the Grand Occasion of World Creativity and Innovation Day at PES Modern College of Engineering, Pune",
    },
    {
      src: "img7.jpg",
      title:
        "Fostering Tomorrow's Visionaries: Illuminating Pathways for the Ambitious Minds of the Future. In their eager eyes, we see the flames of curiosity and the seeds of innovation, ready to flourish and shape the world. Together, we cultivate a landscape where dreams take flight and the extraordinary becomes achievable",
    },
  ]);

  const blocks = data.map((item, index) => (
    <SwiperSlide key={index} className="flex flex-col justify-between gap-y-8 items-center bg-inherit" >
      <p className="text-green-900 w-1/2 text-md  ">{item.title}</p>
      <img src={`/assets/insights/${item.src}`} alt="insight img" className="w-7/12 h-3/4 rounded-lg"  />
    </SwiperSlide>
  ));

  return (
    <div className="pageLayout"  id="InSights">
      <h1 className="text-center font-londrina text-3xl md:text-4xl font-bold">
        INSIGHTS
      </h1>

      {/* <div
        className="flex items-center justify-center backdrop-blur-md mt-16 md:mt-30"
        style={{
          backgroundImage: `url('/assets/insights/ibg.jpg')`,
          height: "100%",
          width: "100%",
        }}
      > */}

      <div
        className="flex items-center justify-center backdrop-blur-md mt-2 md:mt-30"
        style={{
          backgroundImage: `url('/assets/insights/ibg.jpg')`, // Set your background image URL here
          backgroundSize: "cover", // Make the background image cover the entire container
          backgroundPosition: "center", // Center the background image
          height: "720px",
          width: "100%",
          borderRadius: "15px"
        }}
      >


        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {blocks}
        </Swiper>
      </div>
    </div>
  );
}
