import { useWindowSize } from '@react-hook/window-size';
import React, { useState } from 'react';
import data from '../data/data';
import DetailTour from './DetailTour/DetailTour';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import './TourSpecial.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const TourSpecial = () => {
    const [idDetail, setIdDetail] = useState(null)
    const handleChangImage = (id) => {
        console.log("id",id)
        setIdDetail(id)
    }
    const size = useWindowSize();
    console.log(size[0])
    return (
        <div className='tour_special'>
            <div className='tour_special_title'>
                <span>Địa điểm du lịch hot tháng 3</span>
            </div>
            {
                size[0] > 768 ? 
                <div className='tour_special_contain'>
                    {data.map((item,index) => {
                        return (
                            <button className={`tour_special_contain_button transition_${idDetail+1} `} onClick={() => handleChangImage(index)}>
                                <img src = {item.linkImage} alt="image" className={`tour_special_contain_image_${index+1}`}>
                                </img>
                            </button>
                        )
                    })}
                </div> 
                :
                <div className='tour_special_contain'>
                <Swiper
                    style={{
                    '--swiper-navigation-size': '21px',
                    
                    }}
                    pagination={{
                        type: "fraction",
                      }}
                    navigation={true}
                    slidesPerView={2}
                    spaceBetween={0}
                    // autoplay={{
                    // delay: 4000,
                    // disableOnInteraction: false,
                    // }}
                    modules={[Navigation]}>
                    {
                    data.map((item, index) => (
                        <SwiperSlide key={`investor-${index}`}>
                        <button className={`tour_special_contain_button `} onClick={() => handleChangImage(index)}>
                                <img src = {item.linkImage} alt="image" className={`tour_special_contain_image_${index+1}`}>
                                </img>
                            </button>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
                </div>
                }
            <div>
                {
                    idDetail === null ? <p className="tour_special_contain_none" >Chọn ảnh để lấy thông tin chi tiết </p>
                    :
                    <DetailTour id={idDetail}/>
                }
            </div>
      </div>
    )
    
}
export default TourSpecial;