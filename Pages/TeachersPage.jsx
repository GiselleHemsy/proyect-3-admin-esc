
import { Col, Container, Row,Table, Spinner} from "react-bootstrap";
import GeneralModal from "../src/Components/GeneralModal/GeneralModal";
import axiosBack from "../src/config/axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import "../src/index.css"
import TeacherDeleteConfirmation from "../src/Components/TeacherForm/TeachaerDeleteConfirmation";
import EditTeacherForm from "../src/Components/TeacherForm/EditTeacherForm";
import AddTeacherForm from "../src/Components/TeacherForm/AddTeacherForm";


const TeachersPage = () => {
        const [selected, setSelected] = useState("");
        const [state, setState] = useState([]);
        const getTeachers =async()=>{
    try {
      const {data }= await axiosBack.get("/teachers");
      setState(data.teachers);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getTeachers();
  },[])
return(
  <>
    <Container className="my-2 py-2">
      <Row>
        <Col className="d-flex justify-content-end">
            <GeneralModal buttonText="Agregar" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="primary"/>
            <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditTeacherForm getTeachers={getTeachers} selected={selected}  />} variant="warning"/>
            <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<TeacherDeleteConfirmation deleteUser={deleteUser}/>} variant="danger"/>
        </Col>
      </Row>
      <Row>
        <Col>
        {state.length!==0?
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dni</th>
              <th>Email</th>
              <th>Cel</th>
              <th>Domicilio</th>
              <th>Estado</th>
              <th>Cursos a cargo</th>
              <th>FechadeIngreso</th>
            </tr>
          </thead>
          <tbody>
            {state.map((teacher) => 
              <tr key={teacher.dni} onClick={()=>setSelected(teacher.email)} className={selected==teacher.email? "rowSelected" :""}> 
                <td>{teacher.name}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.Dni}</td>
                <td>{teacher.Email}</td>
                <td>{teacher.Cel}</td>
                <td>{teacher.Domicilio}</td>
                <td>{teacher.Estado}</td>
                <td>{teacher.course}</td>
                <td>{teacher.FechadeIngreso}</td>
              </tr>
            )
            }
          </tbody>
          </Table>
        :
          <div>
            <Spinner animation="border"/>
          </div>
      }
          
        </Col>
      </Row>
    </Container>
    </>
)
}
  
    const deleteUser=async()=>{
      console.log("soy la funcion deleteUser")
    //   try {
    //     await axiosBack.delete("/users/"+selected);
    //     getUsers();
    //   } catch (error) {
    //     if(!selected){
    //     toast.error("Para continuar selecciona un usuario")}
    //     else{
    //     toast.error("Error, intente nuevamente mas tarde")
    //   }}
}

export default TeachersPage;