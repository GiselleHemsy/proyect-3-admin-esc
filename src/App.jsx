import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import PrincipalPage from '../Pages/PrincipalPage'
import './index.css'




function App() {
  return(
        <Router>
          <Routes>
            <Route path='/PrincipalPage' element={<PrincipalPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
          </Routes>
        </Router>
      )
    }
    
    export default App

