import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './jamin.css';
import { dotWave } from 'ldrs';
import Geendu from './geendu';

dotWave.register();

const API_BASE = 'https://backend-chi-woad.vercel.app/shoes';

export default function Jamin() {
  const { name } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/${name}`);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  if (loading) {
    return (
      <div className='loading__absolute'>
        <l-dot-wave size="100" speed="1" color="black"></l-dot-wave>
        <p>Loading...</p>
      </div>
    );
  }

  return <Geendu products={userData} />;
}
