import { Button } from "react-bootstrap";

const DeleteCourse = () => {
  const handleDelete = ()=>{
    handleClose();
    deleteUser();
  }

  return ( 
    <>
    <h5>Estas seguro que deseas eliminar este elemento?</h5>
    <Button className="mx-1" variant="danger" onClick={handleDelete} >Eliminar</Button>
    <Button variant="secondary"  >Cancelar</Button>
    </>
  );
}

export default DeleteCourse;