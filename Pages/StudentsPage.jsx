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
import { FaPlus, FaTrash, FaUserEdit } from "react-icons/fa";



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
    <Container className=" styleContainer pb-1 mb-1 d-flex flex-column align-content-center justify-content-center">
      <h4 className="text-center mt-2" >ADMINISTRACIÓN DE ESTUDIANTES</h4>
      {
        user.admin?
        <Row>
        <Col className=" stylebloquebuttons d-flex justify-content-center py-1">
            <GeneralModal buttonText={<FaPlus />} modalTitle="Agregar un usuario"  modalBody={<AddStudentForm  getStudents={getStudents} courses={courses} />} variant="success" />
            <GeneralModal buttonText={<FaUserEdit className="styleicon" />} modalTitle="Editar un usuario"  modalBody={<EditStudentForm getStudents={getStudents} selected={selected} courses={courses}  />} variant="warning" selected={selected}/>
            <GeneralModal buttonText={<FaTrash/>} modalTitle="Eliminar un usuario"  modalBody={<DeleteConfirmation deleteUser={deleteUser}/>} variant="danger" selected={selected} />
        </Col>
      </Row>
      : null
      }
      <Row>
        <Col className="styleContainer mt-1 d-flex justify-content-center align-items-center">
        {state.length!==0?
          <MDBTable  responsive className="styleTabla">
          <MDBTableHead>
            <tr>
              <th className="stylecelda text-center">ID</th>
              <th className="stylecelda text-center">Nombre</th>
              <th className="stylecelda text-center">Apellido</th>
              <th className="stylecelda text-center">Curso</th>
              <th className="stylecelda text-center">Cuota</th>
              <th className="stylecelda text-center">Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody >
            {state?.map((student, index) => 
              <tr key={index} onClick={()=>setSelected(student.email)} className={selected==student.email? "rowSelected" :""}> 
                <td className="stylecelda text-center">{student.expediente}</td>
                <td className="stylecelda text-center">{student.name}</td>
                <td className="stylecelda text-center">{student.lastname}</td>
                <td className="stylecelda text-center">{student.course.name}</td>
                <td className="stylecelda text-center">{student.cuota?"Al dia":"Debe"}</td>
                <td className="stylecelda text-center">{student.email}</td>
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


