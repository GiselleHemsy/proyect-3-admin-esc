import { Button } from "react-bootstrap";

const DeleteCourse = () => {

    const deleteCourse=async()=>{
        try {
          await axiosBack.delete(`/course}`);
          getStudents();
        } catch (error) {
          if(!selected){
          toast.error("Para continuar selecciona un usuario")}
          else{
          toast.error("Error, intente nuevamente mas tarde")
        }}
        }  

  


  return ( 
    <>
    <Form onSubmit={()=>{handleSubmit}}>
    <Form.Select aria-label="Default select example" name="course" onChange={handleChange}  >
      <option>Seleccione el Año de Cursado</option> 
      {
        courses?.map((course, index)=>
        <option key={index}  value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
    </Form>
    <Button variant="success" type="submit" onClick={handleClose}>
        Eliminar curso
      </Button>
    </>
  );
}

export default DeleteCourse;