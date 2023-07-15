import {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally{
      setLoading(false)
    }
  };

  return { data, loading, error }
}