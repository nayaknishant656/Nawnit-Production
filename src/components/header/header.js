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
                    <h3> समाधानी - Portal </h3>
                    <details><summary>
                        समाधानी एक ऑनलाइन सेवा केंद्र (वेब पोर्टल) है जो सभी प्रकार की सरकारी सेवाओं और योजनाओं को लोगों के घर तक पहुँचाने का काम करता</summary> है। इसके माध्यम से आप अपने घर बैठे ही कई प्रकार की सरकारी सेवाओं का लाभ उठा सकते हैं।  चाहे वह आधार कार्ड, पैन कार्ड, या वोटर आईडी बनवाना हो, या फिर प्रधानमंत्री किसान सम्मान निधि, उज्ज्वला योजना, फसल बीमा योजना, मुद्रा लोन जैसी किसी भी सरकारी योजना के लिए आवेदन करना हो – समाधानी आपके लिए सब कुछ आसान बना देता है।
                        <h4>समाधानी के माध्यम से: </h4>
                        <p>
                            <ol className='nav__right_ol'>
                                <li>
                                    सरकारी दस्तावेज: आधार कार्ड, पैन कार्ड, वोटर आईडी, जाति प्रमाण पत्र, आय प्रमाण पत्र आदि के लिए आवेदन कर सकते हैं। ये सभी दस्तावेज़ आपके घर पर ही बनकर पहुँचाए जाते हैं।
                                </li>
                                <li>
                                    सरकारी योजनाओं का लाभ: प्रधानमंत्री आवास योजना, उज्ज्वला योजना, अटल पेंशन योजना, प्रधानमंत्री किसान योजना, फसल बीमा योजना जैसी विभिन्न सरकारी योजनाओं के लिए आवेदन कर सकते हैं।
                                </li>
                                <li>
                                    फायदे: आपको न तो सरकारी दफ्तरों के चक्कर काटने पड़ते हैं, न ही लंबी लाइनों में लगना पड़ता है। बस एक कॉल पर आपके आवेदन की प्रक्रिया शुरू हो जाती है, और सभी काम ऑनलाइन निपटाए जाते हैं।
                                </li>
                                <li>
                                    समय और मेहनत की बचत: साधारण भाषा में, समाधानी आपकी समय और मेहनत दोनों की बचत करता है। आप अपने मोबाइल या कंप्यूटर से ही सभी काम कर सकते हैं और जरूरत पड़ने पर सहायता के लिए एक कॉल पर सम्पर्क कर सकते हैं।
                                </li>
                            </ol>
                        </p></details>
                <div className='nav__left'><div className='left__main_nav'>
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
                </div>
            </div>
        </>

    )
}
