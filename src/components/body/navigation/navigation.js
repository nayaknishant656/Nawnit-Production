import React from 'react'
import "./navigation.css"
import { FaHome } from "react-icons/fa";
import { DiAptana } from "react-icons/di";
import { Link } from "react-router-dom";

export default function navigation() {
  return (
    <div className='navigation__side_grd-parent'>
      <div className='navigation__main_nav'>
        <div className='navigation__main_child'>
          <div className='card-parent'>
            <Link to="/" >Home<FaHome /></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="jamin/66c5f6b59c8670f76b41fc11" >Pan Card Apply<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/" >Aayush Man Card<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/jamin" >Aadhar card Dob Correction<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/jamin" >Ration Card Apply<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/jamin" >Scholarship<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/jamin" >Goverment Latest Scheme<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
          <Link to="/jamin" >Indian Gas Limited<DiAptana/></Link><br></br>
          </div>
          <div className='card-parent'>
            <a href=''>Habua Card Apply<DiAptana/></a><br></br>
          </div>
        </div>
      </div>
    </div>
  )
}
