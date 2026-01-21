import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./jamin.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoArrowBackSharp } from "react-icons/io5";

import { dotWave, metronome } from "ldrs";
dotWave.register();
metronome.register();

export default function ServicePopupPage({ userData, onClose }) {
    const { name } = useParams();
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setServiceData(userData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [name, userData]);

    const {
        title,
        text,
        desc,
        images = [],
        points = [],
        applicants,
        whatsappLink,
        callNumber,
        certificateLink,
    } = userData || {};

    const imgStyle = {
        width: "100%",
        height: "auto",
        maxHeight: "400px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "15px",
    };

    const finalWhatsappLink =
        whatsappLink ||
        `https://wa.me/917261061489?text=I want to apply for ${encodeURIComponent(
            title || ""
        )}`;

    const finalCallNumber = callNumber || "+917261061489";

    const finalCertificateLink =
        certificateLink ||
        "https://nawnitstudio.000webhostapp.com/certificate/index.html";

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            {loading ? (
                <div className="loading__absolute">
                    <l-dot-wave size="100" speed="1" color="black"></l-dot-wave>
                    <p>Loading...</p>
                </div>
            ) : userData ? (
                <div className="popup-overlay" onClick={handleClose}>
                    <div className="popup-content">
                        <div className="back-button">
                            <button 
                                onClick={handleClose}
                                className="popup-close"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px' }}
                            >
                                &times;
                            </button>
                            <button 
                                onClick={handleClose}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}
                            >
                                <IoArrowBackSharp />
                            </button>
                        </div>

                        <div className="header_body__child_jamin">
                            <h1>{title || <Skeleton />}</h1>
                        </div>

                        <div className="paragraph_body_border">
                            <p>{text || desc || <Skeleton count={4} />}</p>
                        </div>

                        {images.length > 0 && (
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                {images.map((url, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={url} style={imgStyle} alt={`service-${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {points.length > 0 && (
                            <ul className="service-points">
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {applicants && (
                            <p className="popup-applicants">Total Applicants: {applicants}</p>
                        )}

                        {finalCertificateLink && (
                            <p>
                                <a href={finalCertificateLink} target="_blank" rel="noreferrer">
                                    Verify Certificate
                                </a>
                            </p>
                        )}

                        <div className="call_loginbutton">
                            <button className="ahref-geendu button-geendu">
                                <a href={finalWhatsappLink} target="_blank" rel="noreferrer">
                                    <span className="a-wht-link">
                                        <BsWhatsapp /> Apply on WhatsApp
                                    </span>
                                </a>
                            </button>

                            <button className="ahref-geendu-call button-geendu">
                                <a href={`tel:${finalCallNumber}`}>
                                    <span className="a-wht-link">
                                        <FiPhoneCall /> Call Us Now
                                    </span>
                                </a>
                            </button>
                        </div>

                        <a
                            href={finalWhatsappLink}
                            className="popup-whatsapp-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaWhatsapp style={{ marginRight: "8px" }} /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            ) : (
                <>
                    <p>server-error :: "under-development"</p>
                    <div>
                        <l-metronome size="45" speed="1" color="black"></l-metronome>
                    </div>
                </>
            )}
        </>
    );
}