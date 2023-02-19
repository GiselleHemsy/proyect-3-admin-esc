//! Custom Hooks
import { useEffect, useState } from "react"
import { toast } from "react-toastify";


const useGet=(url, axios)=>{
  //Estado generico
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  //Funcion para traer los datos
  const getData=async()=>{

    try {
      const {data} = await axios.get(url);
      setState(data.data || data);  
      //* El codigo de arriba || indica que si hay data.data que guarde, sino que guarde solo data
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