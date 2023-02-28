
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IdCard from '../../src/Components/IdCard/IdCard';
import axiosBack from "../../src/config/axios";


const PrincipalPage = ({}) => {
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
            
                <div className='PPcontainer d-flex justify-content-center align-items-center'>
                    <div className='PProw'>
                        <div className='cardPP d-sm-flex col-12 d-md-flex d-lg-flex '>
                        {
                            state.map((per,index) =><IdCard getUsers={getUsers} className="idcard" key={index} name={per.name} lastname={per.lastname} dni={per.dni} cel={per.cel} adress={per.adress} courses={per.courses} state={per.state} id={per._id}/>)
                        }
                        </div>
                    </div>
                </div>
            
        </body>
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              