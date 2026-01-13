import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Geendu from "./geendu.js";
import axios from "axios";
import { Loader } from 'rsuite';
import "./jamin.css";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { dotWave } from 'ldrs'
import Popup from "./popup.js";
dotWave.register()

function RandomUserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const fetchData = async () => {
    try {
      // const url = `http://localhost:8000/shoes?search=${name}`;
      const url = `https://backend-chi-woad.vercel.app/shoes/${name}`;

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

  return (
    <>
      {loading ? (
        <div className="loading__absolute"><l-dot-wave
          size="100"
          speed="1"
          color="black"
        ></l-dot-wave>
          <p>Loading...</p>

        </div>
      ) : (
        <Popup UserData={UserData} />
      )}
    </>
  );
}

export default RandomUserData;
