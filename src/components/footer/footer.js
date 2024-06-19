import React from 'react'
import "./footer.css"
import New from "../body/images/new.gif"
export default function footer() {
  return (
    <div id='footer__main_parent'>
      <div className='footer__box_parent'>
        <div className='left_main-box'>
          <div className='left_header'>
            <h3>Nawnit Production</h3>
          </div>
          <div className='footer_left_main-box'>
            <div className='footer_left_left-box'>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Order</a></li>
                <li><a href='/'>Complain</a></li>
                <li><a href='/'>contact</a></li>
                <li><a href='/'>Pending</a></li>
              </ul>
            </div>
            <div className='footer_left_right-box'>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Order</a></li>
                <li><a href='/'>Complain</a></li>
                <li><a href='/'>contact</a></li>
                <li><a href='/'>Pending</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='right_main-box'>
          <div className='right_body_parent_box'>
            <marquee className="footer_marquee" direction="up">
              This is a sample scrolling text that has scrolls in the upper direction.

              <br></br><br></br>This is a sample scrolling text that has scrolls in the upper direction.
              <br></br><br></br><span><img src={New} className='marquee_img'></img><p>ज़मीन रसीद बनाने के लिए कुछ दस्तावेज़</p></span>
            </marquee>
          </div>
        </div>

      </div>
    </div>
  )
}
