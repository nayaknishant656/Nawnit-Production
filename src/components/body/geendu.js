import React from 'react';
import './jamin.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { IoArrowBackSharp } from 'react-icons/io5';
import { BsWhatsapp } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { metronome } from 'ldrs';

metronome.register();

const CONTACT_NUMBER = '917261061489';
const CERTIFICATE_LINK = 'https://nawnitstudio.000webhostapp.com/certificate/index.html';

export default function Geendu({ products }) {
    if (!products) {
        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <p>server-error :: "under-development"</p>
                <l-metronome size="45" speed="1" color="black"></l-metronome>
            </div>
        );
    }

    const imgStyle = { width: '100%', height: '300px', objectFit: 'cover' };

    return (
        <main id='grandparent_jamin'>
            <div className='grandparent__jamin_child'>

                <div className='back-button'>
                    <Link to="/"><IoArrowBackSharp /></Link>
                </div>

                <div className='body__child_jamin'>
                    <div className='paragraph_body__child_jamin'>
                        <div className='paragraph_body_border'>

                            <div className='header_body__child_jamin'>
                                <h1>{products.title}</h1>
                            </div>

                            <p>{products.text}</p>

                            {products.images?.length > 0 && (
                                <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {products.images.map((src, i) => (
                                        <SwiperSlide key={i}>
                                            <img style={imgStyle} src={src} alt={`slide-${i}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}

                            <p>
                                <a href={CERTIFICATE_LINK} target="_blank" rel="noreferrer">
                                    Verify Certificate
                                </a>
                            </p>

                            <div className='call_loginbutton'>
                                <button className='ahref-geendu button-geendu'>
                                    <a
                                        href={`https://wa.me/${CONTACT_NUMBER}?text=apply for pan card`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className='a-wht-link'>
                                            <BsWhatsapp /> Apply on WhatsApp
                                        </span>
                                    </a>
                                </button>

                                <button className='ahref-geendu-call button-geendu'>
                                    <a
                                        href={`https://wa.me/${CONTACT_NUMBER}?text=apply for pan card`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className='a-wht-link'>
                                            <FiPhoneCall /> Call us Now
                                        </span>
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
