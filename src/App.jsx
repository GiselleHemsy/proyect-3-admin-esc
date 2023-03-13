
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PrincipalPage from '../Pages/PrincipalPage/PrincipalPage'
import StudentsPage from '../Pages/StudentsPage';
import NavBar from './Components/NavBar/NavBar';
import './index.css'
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoutes';
import Home from '../Pages/Home';
import AuthorizPage from "../Pages/AuthorizPage";
import CoursesDetail from '../Pages/CoursesDetail';
import CoursePage from '/pages/CoursePage'
import UserProvider from './context/UserContext';
import AuthorizationPage from '../Pages/AuthorizationPage/AuthorizationPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaExclamationTriangle } from "react-icons/fa";



function App() {
  return(
        <Router>
          <UserProvider>
          <NavBar/>
            <Routes>
            <Route path="/habilitacion" element={<PrivateRoute><AuthorizationPage/></PrivateRoute>}/>
            <Route path='/ErrorPage' element={<ErrorPage/>}/>
            <Route path="/AuthorizPage" element={<PrivateRoute><AuthorizPage/></PrivateRoute>}/>
            <Route path='/CoursesDetail' element={<PrivateRoute><CoursesDetail/></PrivateRoute>}/>
            <Route path='/*' element={<ErrorPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/PrincipalPage' element={<PrivateRoute><PrincipalPage/></PrivateRoute>}/>
            <Route path='/CoursePage' element={<PrivateRoute><CoursePage/></PrivateRoute>}/>
            <Route path='/StudentsPage' element={<PrivateRoute><StudentsPage/></PrivateRoute>}/>
            <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
            </Routes>
            <Footer/>
          </UserProvider>
            <ToastContainer/>
        </Router>
      )
    }
    
    export default App


