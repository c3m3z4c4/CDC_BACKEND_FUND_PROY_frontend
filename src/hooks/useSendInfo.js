import {useState, useEffect} from 'react';
import axios from 'axios';

export const useSendInfo = (url,  fecha, latitud, longitud, ipAddress, ciudad) => {
  const toSendData = {
    fecha: fecha,
    latitud: latitud,
    longitud: longitud,
    ipaddress: ipAddress, 
    ciudad: ciudad,
  };
  const [error, setError] = useState(null);


  useEffect(() => {
    sendData();
  }, []);


  const sendData = async () => {
    try {
      await axios.post(url, toSendData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return { error }
}