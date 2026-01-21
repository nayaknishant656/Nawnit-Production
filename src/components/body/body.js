import React, { useState } from 'react'
import "./body.css"
import Navigation from "./navigation/navigation"
import Jaminrasid from "./images/logo2_new2.png"
import aadhar from "./images/aadhar.png"
import Jamin from './jamin';
import duplicate from "./images/duplicate.jpg"
import { Link } from "react-router-dom";
import Popup from "./popup";
import { FaWhatsapp } from "react-icons/fa";

export default function Body() {
    const [selectedService, setSelectedService] = useState(null);
    const [service, setService] = useState(null);
    
    const services = [
        { title: "पैन कार्ड अप्लाई", img: "https://images.livemint.com/img/2019/10/28/600x338/pan_card_1572258102669.jpg", link: "66c5f6b59c8670f76b41fc11", extraClass: "rasid-color", desc: "Apply for a new Pan Card or correct existing details easily.", applicants: "1.5k" },
        { title: "आधार कार्ड", img: aadhar, link: "jamin/546456456", desc: "Download your Aadhar or update your demographic details online.", applicants: "2.3k" },
        { title: "जामिन रसीद", img: Jaminrasid, link: "jamin/74678678", desc: "Pay your land revenue and get the receipt instantly.", applicants: "850" },
        { title: "जन्म प्रमाण पत्र", img: Jaminrasid, link: "jamin/5676", desc: "Apply for or download your Birth Certificate online.", applicants: "1.1k" },
        { title: "आय प्रमाण पत्र", img: Jaminrasid, link: "jamin/56746", desc: "Get your Income Certificate for scholarships and other needs.", applicants: "3.2k" },
        { title: "आवासीय प्रमाण पत्र", img: Jaminrasid, link: "jamin/76786", desc: "Proof of residence certificate for official purposes.", applicants: "4.5k" },
        { title: "नई सेवा", img: Jaminrasid, link: "#", desc: "Check out the latest government schemes and services.", applicants: "New" }
    ];

    const handleApply = (service) => {
        setSelectedService(service);
        setService(service.link);
    };

    const closePopup = () => {
        setSelectedService(null);
    };

    return (
        <><Navigation />
            <main id='body_main'>
                <div id='body__main_parent'>
                    {services.map((service, index) => (
                        <div key={index} className='body__main_child'>
                            <div className={`card__main_parent ${service.extraClass || ''}`}>
                                <div className="applicant-badge">{service.applicants} Applicants</div>
                                <img src={service.img} className='image_src' alt={service.title}></img>
                                <p>{service.title}</p>
                                <p className="card-desc">{service.desc}</p>
                                <div className='card-buttons'>
                                    <Link to={`jamin/${service.link}`} className='btn-details'>Details</Link>
                                    <button onClick={() => handleApply(service)} className='btn-apply'>
                                        Apply <FaWhatsapp style={{ marginLeft: '5px', fontSize: '1.2rem' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedService && (
                    <Jamin selectedService={selectedService} closePopup={closePopup} />
                )}
            </main>
        </>
    )
}
