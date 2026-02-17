import React from 'react';
import './Testimonials.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Avatar1 from '../assets/about.jpg'; // Using about image as placeholder
import Avatar2 from '../assets/about.jpg';
import Avatar3 from '../assets/about.jpg';

const data = [
    {
        avatar: Avatar1,
        name: 'Tina Snow',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
    {
        avatar: Avatar2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
    {
        avatar: Avatar3,
        name: 'Kwame Despite',
        review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2 className="section__title">Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
