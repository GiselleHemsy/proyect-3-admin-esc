import { useEffect, useState } from "react"
import { toast } from "react-toastify";


const useGet=(url, axios, info)=>{
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData=async()=>{

    try {
      const {data} = await axios.get(url);
      setState(data.info);  
      setLoading(false);
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return [state, loading, getData]

}

export default useGet;