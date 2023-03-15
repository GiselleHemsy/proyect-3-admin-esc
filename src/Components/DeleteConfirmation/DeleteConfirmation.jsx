import { Button } from "react-bootstrap";

const DeleteConfirmation = ({handleClose, deleteUser}) => {
  const handleDelete = ()=>{
    handleClose();
    deleteUser();
  }

  return ( 
    <>
    <h5>Estas seguro? Esto no se puede deshacer</h5>
    <Button className="mx-1" variant="danger" onClick={handleDelete} >Eliminar</Button>
    <Button variant="secondary" onClick={handleClose} >Cancelar</Button>
    </>
  );
}

export default DeleteConfirmation;