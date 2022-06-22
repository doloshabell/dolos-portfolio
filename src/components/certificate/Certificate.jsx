import React from 'react';
import './certificate.css';
import SertifikatAWS from "../../assets/sertifikataws.jpg";
import SertifikatAdobe from "../../assets/sertifikatadobe.jpg";
import SertifikatImpactByte from "../../assets/sertifikatimpactbyte.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: SertifikatImpactByte,
    name: "Fullstack Web Developer - Bootcamp (2022)",
    review: "Website design, building front-end and back-end applications, as well as non-technical skills (soft skills).",
    link: `https://network.impactbyte.com/certificate/habell-dolosha-purba`
  },
  {
    avatar: SertifikatAWS,
    name: "Cloud Practitioner Essentials (2021)",
    review: "Learn to understand the AWS Cloud with all types of services, global infrastructure, and prices.",
    link: `https://www.dicoding.com/certificates/1RXY4D9NMPVM`
  },
  {
    avatar: SertifikatAdobe,
    name: "Visual Communication using Adobe Photoshop CS6 (2019)",
    review: "Learn to understand Adobe Photoshop CS6 software, work on a design, recognize originality.",
    link: `https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=175&cvid=vE2ySIbz/hZaGsUKEIMNkQ==`
  },
]

const Certificate = () => {
  return (
    <section id="certificate">
      <h5>Courses I've Taken</h5>
      <h2>Certificate</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review, link }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
                <a href={link} className="btn btn-primary" target="_blank" rel="noreferrer">Click to see the certificates</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Certificate