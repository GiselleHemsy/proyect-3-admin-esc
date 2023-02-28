
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
import AdminPage from '/pages/adminPage'
import CoursePage from '/pages/CoursePage'
import UserProvider from './context/UserContext';



function App() {
  return(
        <Router>
          <UserProvider>
          <NavBar/>
            <Routes>
            <Route path="/AuthorizPage" element={<AuthorizPage/>}/>
            <Route path='/CoursesDetail' element={<CoursesDetail/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/ErrorPage' element={<ErrorPage/>}/>
            <Route path='/Admin' element={<AdminPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/CoursePage' element={<CoursePage/>}/>
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


