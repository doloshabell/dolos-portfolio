import React from 'react';
import './testimonial.css';
import I3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: I3,
    name: "Lorem Ipsum",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae laboriosam ducimus error iste voluptas architecto quae, vero molestiae libero ratione itaque omnis, et aliquam excepturi? Placeat officia quia dignissimos."
  },
  {
    avatar: I3,
    name: "Lorem Ipsum",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae laboriosam ducimus error iste voluptas architecto quae, vero molestiae libero ratione itaque omnis, et aliquam excepturi? Placeat officia quia dignissimos."
  },
  {
    avatar: I3,
    name: "Lorem Ipsum",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae laboriosam ducimus error iste voluptas architecto quae, vero molestiae libero ratione itaque omnis, et aliquam excepturi? Placeat officia quia dignissimos."
  },
  {
    avatar: I3,
    name: "Lorem Ipsum",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae laboriosam ducimus error iste voluptas architecto quae, vero molestiae libero ratione itaque omnis, et aliquam excepturi? Placeat officia quia dignissimos."
  }
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial