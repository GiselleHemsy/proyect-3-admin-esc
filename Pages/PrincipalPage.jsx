
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IdCard from '../src/Components/IdCard/IdCard';
import axiosBack from "../src/config/axios";





const PrincipalPage = () => {

const [state, setState] = useState([]);
const getUsers = async()=>{
    try {
        const {data}= await axiosBack.get("/users");
        
        setState(data.users);  
    } catch (error) {
        toast.error(error.message)
    
    }
}

    useEffect(()=>{
    getUsers();
    },[])

    
    return(  
        <>
            
        <div className='PPcontainer'>
            <div className='row'>
                    <div className='col-12 d-md-flex d-lg-flex my-5 '>
                    {
                        state.map((per,index) =><IdCard className="mx-5 my-5  g-3" key={index} name={per.name} cel={per.cel} dni={per.dni} _id={per._id} />)
                    }
                    </div>
            </div>
        </div>
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              