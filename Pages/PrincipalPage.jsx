
import { useEffect, useState } from 'react';
import IdCard from '../src/Components/IdCard/IdCard';
import axiosBack from "../src/config/axios"




const PrincipalPage = () => {

const [state, setState] = useState([]);
const getData = async()=>{
    try {
        const {data}= await axiosBack.get("/users");
        console.log(data.users);
        setState(data.users);  
    } catch (error) {
        toast.error(error.message)
    
    }
}

    useEffect(()=>{
    getData();
    },[])

    
    return(  
        <>
        <div className='PPcontainer'>
            <div className='row g-3'>
                    {
                    state.map((per,index) =><IdCard key={index} name={per.name} cel={per.cel} dni={per.dni} _id={per._id} 
                    />)
                    }
                </div>
            </div>
        
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              