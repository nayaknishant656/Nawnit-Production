import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./jamin.css";
import { dotWave } from 'ldrs';
import Popup from "./popup.js";

dotWave.register();

function RandomUserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const { name } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // const url = `http://localhost:8000/shoes?search=${name}`;
      const url = `https://backend-chi-woad.vercel.app/shoes/66c5f6b59c8670f76b41fc11`;

      const { data } = await axios.get(url);
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/"); // Navigate back to home or previous page
  };

  return (
    <>
      {loading ? (
        <div className="loading__absolute">
          <l-dot-wave
            size="100"
            speed="1"
            color="black"
          ></l-dot-wave>
          <p>Loading...</p>
        </div>
      ) : (
        showPopup && <Popup userData={userData} onClose={handleClosePopup} />
      )}
    </>
  );
}

export default RandomUserData;