
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PrincipalPage from '../Pages/PrincipalPage'
import StudentsPage from '../Pages/StudentsPage';
import NavBar from './Components/NavBar/NavBar';
import UserDetailPage from '../Pages/UserDetailPage';
import './index.css'
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoutes';
import Home from '../Pages/Home';



function App() {
  return(
        <Router>
          <NavBar/>
            <Routes>
            <Route path='/UserDetailPage' element={<UserDetailPage/>}/>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
            <Route path='/StudentsPage' element={<StudentsPage/>}/>
            <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
            </Routes>
            <ToastContainer/>
          <Footer/>
        </Router>
      )
    }
    
    export default App

