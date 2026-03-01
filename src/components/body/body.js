import React, { useState } from 'react';
import './body.css';
import Jaminrasid from './images/logo2_new2.png';
import aadhar from './images/aadhar.png';
import { Link } from 'react-router-dom';
import Popup from './popup';
import { FaWhatsapp } from 'react-icons/fa';

const services = [
    {
        title: 'Apply PAN Card',
        img: 'https://images.livemint.com/img/2019/10/28/600x338/pan_card_1572258102669.jpg',
        link: '66c5f6b59c8670f76b41fc11',
        desc: 'Apply for a new Pan Card or correct existing details easily.',
        applicants: '1.5k',
    },
    {
        title: 'Aadhar Card',
        img: aadhar,
        link: '546456456',
        desc: 'Download your Aadhar or update your demographic details online.',
        applicants: '2.3k',
    },
    {
        title: 'Land Receipt',
        img: Jaminrasid,
        link: '74678678',
        desc: 'Pay your land revenue and get the receipt instantly.',
        applicants: '850',
    },
    {
        title: 'Birth Certificate',
        img: Jaminrasid,
        link: '5676',
        desc: 'Apply for or download your Birth Certificate online.',
        applicants: '1.1k',
    },
    {
        title: 'Income Certificate',
        img: Jaminrasid,
        link: '56746',
        desc: 'Get your Income Certificate for scholarships and other needs.',
        applicants: '3.2k',
    },
    {
        title: 'Residential Certificate',
        img: Jaminrasid,
        link: '76786',
        desc: 'Proof of residence certificate for official purposes.',
        applicants: '4.5k',
    },
    {
        title: 'New Service',
        img: Jaminrasid,
        link: '#',
        desc: 'Check out the latest government schemes and services.',
        applicants: 'New',
    },
];

export default function Body() {
    const [selectedService, setSelectedService] = useState(null);

    const handleApply = (svc) => setSelectedService(svc);
    const closePopup = () => setSelectedService(null);

    return (
        <>
            <main id='body_main'>
                <div id='body__main_parent'>
                    {services.map((svc, index) => (
                        <div key={index} className='body__main_child'>
                            <div className='card__main_parent'>
                                <div className='applicant-badge'>{svc.applicants} Applicants</div>
                                <img src={svc.img} className='image_src' alt={svc.title} />
                                <p>{svc.title}</p>
                                <p className='card-desc'>{svc.desc}</p>
                                <div className='card-buttons'>
                                    <Link to={`/jamin/${svc.link}`} className='btn-details'>Details</Link>
                                    <button onClick={() => handleApply(svc)} className='btn-apply'>
                                        Apply <FaWhatsapp style={{ marginLeft: '5px', fontSize: '1.2rem' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedService && (
                    <Popup userData={selectedService} onClose={closePopup} />
                )}
            </main>
        </>
    );
}
