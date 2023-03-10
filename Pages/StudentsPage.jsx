import { Col, Container, Row,Table, Spinner} from "react-bootstrap";
import AddStudentForm from "../src/Components/AddStudentForm/AddStudentForm";
import EditStudentForm from "../src/Components/EditStudentForm/EditStudentForm";
import DeleteConfirmation from "../src/Components/DeleteConfirmation/DeleteConfirmation";
import GeneralModal from "../src/Components/GeneralModal/GeneralModal";
import axiosBack from "../src/config/axios";
import { useContext, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "../src/index.css"
import { UserContext } from "../src/context/UserContext";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




const StudentsPage = () => {
  const [selected, setSelected] = useState("");
  const [state, setState] = useState([]);
  const [courses, setCourses] = useState([]);
  const {user} = useContext(UserContext);


  const getStudents =async()=>{
    try {
      const {data }= await axiosBack.get("/students");
      setState(data.students);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getCourses = async()=>{
    try {
      const {data }= await axiosBack.get("/course");
      setCourses(data.courses); 
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getStudents();
    getCourses();
  },[])


  const deleteUser=async()=>{
    try {
      await axiosBack.delete(`/students/${selected}`);
      getStudents();
      toast.error("Se ha eliminado un usuario")
    } catch (error) {
      toast.error("Error, intente nuevamente mas tarde")
    }
    } 

return(
  <>
    <Container className=" styleContainer pb-4 mb-4 d-flex flex-column align-content-center justify-content-center">
      <h4 className="text-center mt-3" >ADMINISTRACIÓN DE ESTUDIANTES</h4>
      {
        user.admin?
        <Row>
        <Col className=" stylebloquebuttons d-flex justify-content-center py-2">
            <GeneralModal buttonText="Agregar" modalTitle="Agregar un usuario"  modalBody={<AddStudentForm  getStudents={getStudents} courses={courses} />} variant="primary" />
            <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditStudentForm getStudents={getStudents} selected={selected} courses={courses}  />} variant="warning" selected={selected}/>
            <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<DeleteConfirmation deleteUser={deleteUser}/>} variant="danger" selected={selected} />
        </Col>
      </Row>
      : null
      }
      <Row>
        <Col className="styleContainer mt-3">
        {state.length!==0?
          <MDBTable  responsive className="styleTabla">
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Estado de Cuota</th>
              <th>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody >
            {state?.map((student, index) => 
              <tr key={index} onClick={()=>setSelected(student.email)} className={selected==student.email? "rowSelected" :""}> 
                <td>{student.expediente}</td>
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                <td>{student.course.name}</td>
                <td>{student.cuota?"Al dia":"Debe"}</td>
                <td>{student.email}</td>
              </tr>
            )
            }
          </MDBTableBody>
          </MDBTable>
        :
          <div>
            <Spinner animation="border"/>
          </div>
      }
          
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
    </>
)

}
  
  


export default StudentsPage;


