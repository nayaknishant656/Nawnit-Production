import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Geendu from "./geendu.js";
import axios from "axios";
import { Loader } from 'rsuite';
import "./jamin.css";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function RandomUserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const fetchData = async () => {
    try {
      const url = `http://localhost:8000/shoes?search=${name}`;
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
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      ) : (
        <Geendu products={userData.products ? userData.products : []} />
      )}
    </>
  );
}

export default RandomUserData;
