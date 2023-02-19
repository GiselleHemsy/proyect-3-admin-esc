
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PrincipalPage from '../Pages/PrincipalPage'
import StudentsPage from '../Pages/StudentsPage';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import './index.css'
import CoursesDetail from '../Pages/CoursesDetail';




function App() {
  return(
        <Router>
          <NavBar/>
            <Routes>
            <Route path='/CoursesDetail' element={<CoursesDetail/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
            <Route path='/StudentsPage' element={<StudentsPage/>}/>
          </Routes>
            <Footer/>
        </Router>
      )
    }
    
    export default App

