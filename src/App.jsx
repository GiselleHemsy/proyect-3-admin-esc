
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PrincipalPage from '../Pages/PrincipalPage'
import StudentsPage from '../Pages/StudentsPage';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import './index.css'
import AdminPage from '../Pages/AdminPage';
import CoursePage from '../Pages/CoursePage';
import TeachersPage from '../Pages/TeachersPage';
import SubjectPage from '../Pages/SubjectPage';




function App() {
  return(
        <Router>
          <NavBar/>
            <Routes>
            <Route path='/Admin' element={<AdminPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/CoursePage' element={<CoursePage/>}/>
            <Route path='/StudentsPage' element={<StudentsPage/>}/>
            <Route path='/TeachersPage' element={<TeachersPage/>}/>
            <Route path='/subjectPage' element={<SubjectPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
          </Routes>
            <Footer/>
        </Router>
      )
    }
    
    export default App

