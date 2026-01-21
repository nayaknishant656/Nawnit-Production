import React from 'react'
import "./navigation.css"
import { FaHome, FaIdCard, FaHeartbeat, FaFingerprint, FaUtensils, FaGraduationCap, FaLandmark, FaFire, FaAddressCard } from "react-icons/fa";
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
            <Link to="jamin/66c5f6b59c8670f76b41fc11" >Pan Card Apply<FaIdCard /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/" >Aayush Man Card<FaHeartbeat /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/jamin" >Aadhar card Dob Correction<FaFingerprint /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/jamin" >Ration Card Apply<FaUtensils /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/jamin" >Scholarship<FaGraduationCap /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/jamin" >Goverment Latest Scheme<FaLandmark /></Link><br></br>
          </div>
          <div className='card-parent'>
            <Link to="/jamin" >Indian Gas Limited<FaFire /></Link><br></br>
          </div>
          <div className='card-parent'>
            <a href=''>Habua Card Apply<FaAddressCard /></a><br></br>
          </div>
        </div>
      </div>
    </div>
  )
}
