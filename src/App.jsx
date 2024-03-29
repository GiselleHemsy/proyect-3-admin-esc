
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PrincipalPage from './Pages/PrincipalPage/PrincipalPage'
import StudentsPage from './Pages/StudentsPage';
import NavBar from './components/NavBar/NavBar';
import './index.css'
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoutes';
import CoursesDetail from './Pages/CoursesDetail/CoursesDetail';
import UserProvider from './context/UserContext';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';




function App() {
  return(
        <Router>
          <UserProvider>
          <NavBar/>
            <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/habilitacion" element={<PrivateRoute><AuthorizationPage/></PrivateRoute>}/>
            <Route path='/ErrorPage' element={<ErrorPage/>}/>
            <Route path='/CoursesDetail' element={<PrivateRoute><CoursesDetail/></PrivateRoute>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/PrincipalPage' element={<PrivateRoute><PrincipalPage/></PrivateRoute>}/>
            <Route path='/StudentsPage' element={<PrivateRoute><StudentsPage/></PrivateRoute>}/>
            <Route path='/*' element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
          </UserProvider>
            <ToastContainer/>
        </Router>
      )
    }
    
    export default App


