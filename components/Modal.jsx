import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Card } from "./ui/card";
import { XCircleIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const Modal = ({ activePop, setShowModal }) => {
  const showModalHandle = () => {
    setShowModal(false);
  };
  console.log(activePop)

  return (
    <div className=" w-full h-full z-50 fixed top-0 left-[0] bg-black/40">
      <Card className=" md:w-[525px] lg:w-[600px] w-[350px] md:h-[500px] h-[525px] overflow-hidden  bg-white relative md:top-[27%] xl:top-24 md:left-[17%] lg:left-[22%] xl:left-[32%] top-36 left-[9%]">
        <figure className=" flex justify-center w-full gap-x-4 px-8 xl:px-14 pt-6 pb-2 bg-gray-alt ">
          <Swiper
            className=" h-[300px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            loop={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img className="w-[260px] md:w-[340px] mx-auto xl:w-full" src={activePop[0][0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][3]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className="w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][4] || activePop[0][0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][5] || activePop[0][1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-[260px] md:w-[340px] mx-auto xl:w-full " src={activePop[0][6] || activePop[0][2]} alt="" />
            </SwiperSlide>
        
          </Swiper>
        </figure>

        <div className="px-8 py-2 dark:bg-secondary h-full">
        <div className="text-xl font-semibold mt-3 text-black dark:text-white">{activePop[1]}</div>
        <p className="text-gray-alt text-md mt-3">{activePop[2]}</p>
        
        <div className=" flex gap-x-4" >
        {activePop[3].map((tool, index) => {
            return (

                
              <Badge className="uppercase font-normal mt-5" key={index}>{tool}</Badge>

         
              
           
            )
          })}

          </div>

          </div>

        <button
          className="absolute top-4 right-1 md:right-[2%] xl:top-[3%] xl:right-[2%] hover:text-primary"
          onClick={() => showModalHandle()}
        >
         <XCircleIcon size={34} />
        </button>
      </Card>
    </div>
  );
};

export default Modal;
