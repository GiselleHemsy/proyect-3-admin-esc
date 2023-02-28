
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
import AdminPage from '/pages/adminPage'
import CoursePage from '/pages/CoursePage'



function App() {
  return(
        <Router>
          <NavBar/>
            <Routes>
            <Route path='/ErrorPage' element={<ErrorPage/>}/>
            <Route path='/Admin' element={<AdminPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/CoursePage' element={<CoursePage/>}/>
            <Route path='/StudentsPage' element={<StudentsPage/>}/>
            <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
            </Routes>
            <ToastContainer/>
          <Footer/>
        </Router>
      )
    }
    
    export default App


