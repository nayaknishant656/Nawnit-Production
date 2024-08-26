import React from 'react'
import "./body.css"
import Navigation from "./navigation/navigation"
import Jaminrasid from "./images/logo2_new2.png"
import aadhar from "./images/aadhar.png"
import duplicate from "./images/duplicate.jpg"
import { Link } from "react-router-dom";
export default function body() {
    return (
        <>
            <main id='body_main'>
                <div id='body__main_parent'>
                    <marquee direction="left" height="10">
                        This is a sample scrolling text that has scrolls texts to the left.
                    </marquee>
                    <Link to="jamin/66c5f6b59c8670f76b41fc11    " className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent rasid-color'>
                            <img src="https://images.livemint.com/img/2019/10/28/600x338/pan_card_1572258102669.jpg" className='image_src'></img>
                            <p>पैन कार्ड अप्लाई </p>
                        </div>
                    </div>
                    </Link>
                    <Link to="jamin/66c0d4ff9c8670f76baf36e5  " className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent'>
                            <img src={aadhar} className='image_src'></img>
                            <p>आधार कार्ड</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="jamin/66c0d4ff9c8670f76baf36e5" className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent'>
                            <img src={aadhar} className='image_src'></img>
                            <p>जामिन रसीद</p>
                        </div>
                    </div></Link>
                    <Link to="jamin/4" className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent'>
                            <img src={Jaminrasid} className='image_src'></img>
                            <p>जन्म प्रमाण पत्र </p>
                        </div>
                    </div></Link>
                    <Link to="jamin/5" className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent'>
                            <img src={Jaminrasid} className='image_src'></img>
                            <p>आय प्रमाण पत्र</p>
                        </div>
                    </div></Link>
                    <Link to="jamin/6" className="ul-link"><div className='body__main_child'>
                        <div className='card__main_parent'>
                            <img src={Jaminrasid} className='image_src'></img>
                            <p>आवासीय प्रमाण पत्र</p>
                        </div>
                    </div></Link>
                </div>
            </main>
        </>
    )
}
