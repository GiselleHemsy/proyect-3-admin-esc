import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const PrincipalPageForm = ({handleClose}) => {
const [values, setValues] = useState(

    {
        name:"",
        lastname:"",
        dni:"",
        email:"",
        tel:"",
        timestamps:"",
        versionkey:"",
    }
);
    const handleChange =(e)=>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    });
}
const handleSubmit =async(e)=>{    
    }
return (
    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userName">
                <Form.Label>Nombre del usuario</Form.Label>
                <Form.Control type="text" placeholder="ingresa tu nombre" name="name" value={values.name} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userlastname">
                <Form.Label>lastname</Form.Label>
                <Form.Control type="text" placeholder="ingresa tu apellido" name="lastname" value={values.lastname} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dni">
                <Form.Label>dni</Form.Label>
                <Form.Control type="number"  name="dni" value={values.dni} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control type="text" name="email" value={values.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tel">
                <Form.Label>tel</Form.Label>
                <Form.Control type="number" name="tel" value={values.tel} onChange={handleChange}/>
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClose}>
            Editar
            </Button>
    </Form>
);
}

export default PrincipalPageForm;