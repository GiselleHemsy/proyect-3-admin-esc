
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IdCard from '../src/Components/IdCard/IdCard';
import axiosBack from "../src/config/axios";





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
            
        <div className='PPcontainer d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                    <div className='col-md-6 g-2'>
                    {
                        state.map((per,index) =><IdCard key={index} name={per.name} cel={per.cel} dni={per.dni} _id={per._id} />)
                    }
                    </div>
            </div>
        </div>
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              
            
            