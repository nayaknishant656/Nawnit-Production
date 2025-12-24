import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";
import nikhil from "./img/nikhil.jpg"
import mukesh from "./img/mukesh.jpg"
export default function header() {
    return (
        <>
            <div className='nav_main__parent'>
                <div className='nav__right'>
                    <h3> समाधानी - AI Portal </h3>
                    {/* <details>
                        <summary>
                        <p className='summary_p'>समाधानी एक ऑनलाइन सेवा केंद्र (वेब पोर्टल) है जो सभी प्रकार की सरकारी सेवाओं और योजनाओं को लोगों के घर तक पहुँचाने का काम करता</p></summary> है। इसके माध्यम से आप अपने घर बैठे ही कई प्रकार की सरकारी सेवाओं का लाभ उठा सकते हैं।  चाहे वह आधार कार्ड, पैन कार्ड, या वोटर आईडी बनवाना हो, या फिर प्रधानमंत्री किसान सम्मान निधि, उज्ज्वला योजना, फसल बीमा योजना, मुद्रा लोन जैसी किसी भी सरकारी योजना के लिए आवेदन करना हो – समाधानी आपके लिए सब कुछ आसान बना देता है।
                        <h4>समाधानी के माध्यम से: </h4>
                    </details> */}
                    </div>
                {/* <div className='nav__left'><div className='left__main_nav'>
                    <div className='parent-fdr-img'>
                        <div className='child-img'>
                            <div className='child-img-card'>
                                <img className='parent-fdr-child-img' src={nikhil}></img>
                                <h4>Chief Executive Officer</h4>
                                <p>Nikhil Kumar Nayak</p>
                                <p>mob- 9798949561</p>
                            </div>
                            <div className='child-img-card'>
                                <img className='parent-fdr-child-img' src={mukesh}></img>
                                <h4>Manager</h4>
                                <p>Nikhil Kumar Nayak</p>
                                <p>mob- 9798949561</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}
            </div>
        </>
    )
}
