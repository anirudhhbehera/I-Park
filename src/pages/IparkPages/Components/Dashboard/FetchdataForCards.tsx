import React, { useEffect, useState } from 'react';
import { useSelector, UseSelector } from 'react-redux';
import axios from 'axios';
export default function FetchdataForCards({
  sethotelcount,
  setbranchcount,
  setvalleyboycount
}) {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  // const [hotelcount,sethotelcount]=useState(0);
  // const [branchcount,setbranchcount]=useState(0);

  const fetchHotel = async () => {
    const url = `${import.meta.env.VITE_API_URL}/hotel/get`;
    console.log('to', token);
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data) {
        const formattedData = response.data.map((item) => ({
          ...item
        }));
        console.log('Hotel ..', formattedData);
        sethotelcount(response.data.length);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchBranch = async () => {
    const url = `${import.meta.env.VITE_API_URL}/branch/get`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data) {
        setbranchcount(response.data.length);
      }
    } catch (error) {
      console.log('error while fetching branch count', error);
    }
  };
  const fetchValleyboy = async () => {
    const url = `${import.meta.env.VITE_API_URL}/valleyboy/get`;

    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (Array.isArray(response.data)) {
        setvalleyboycount(response.data.length);
      }
    } catch (error) {
      console.log('error while fetching valleyboy count', error);
    }
  };
  useEffect(() => {
    fetchHotel();
    fetchBranch();
    fetchValleyboy();
  }, []);
  return null;
}
