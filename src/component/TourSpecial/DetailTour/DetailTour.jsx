import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../data/data';
import './DetailTour.scss'

const DetailTour = ({id}) => {
    return (
        <div className='detail_tour'>
        <div >
          {data.map((item,index) => {
            if (index === id) {
                return (
                    <div className='detail_tour_item'>
                        <p className='detail_tour_item_text'>Địa điểm: {item.address}</p>
                        <p className='detail_tour_item_text'>Thời gian chuyến đi: {item.time}</p>
                        <p className='detail_tour_item_text'>Thăm quan: {item.tourism}</p>
                        <p className='detail_tour_item_text'>Thời gian khởi hành: {item.timeStart}</p>  
                    </div>
                )
            }
          })}
        </div>
        <div>
        </div>
      </div>
    )
}
export default DetailTour;