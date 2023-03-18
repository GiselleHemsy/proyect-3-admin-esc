
import { Button } from "react-bootstrap";

const TeacherDeleteConfirmation = ({handleClose, deleteUser}) => {
  const handleDelete = ()=>{
    handleClose();
    deleteUser();
  }

  return ( 
    <>
    <h5>Estas seguro que deseas eliminar este elemento?</h5>
    <Button className="mx-1" variant="danger" onClick={handleDelete} >Eliminar</Button>
    <Button variant="secondary" onClick={handleClose} >Cancelar</Button>
    </>
  );
}

export default TeacherDeleteConfirmation;