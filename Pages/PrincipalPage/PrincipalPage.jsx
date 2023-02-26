
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IdCard from '../../src/Components/IdCard/IdCard';
import axiosBack from "../../src/config/axios";





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
        <body className='bodyPP'>
            <main className='mainPP'>
                <div className='PPcontainer'>
                    <div className='PProw'>
                        <div className='cardPP col-12 d-md-flex d-lg-flex my-5 '>
                        {
                            state.map((per,index) =><IdCard className="idcard" key={index} name={per.name} lastname={per.lastname} dni={per.dni} _id={per.cel} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
        </body>
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              