"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useInscription = (txid: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://api.hiro.so/ordinals/v1/inscriptions/${txid}/content`,
          headers: { 
            'Accept': 'application/json'
          }
        };

        const response = await axios.request(config);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [txid]);

  return { data, loading, error };
};
