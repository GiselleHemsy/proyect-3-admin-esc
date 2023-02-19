import { BrowserRouter, Routes, Route } from "react-router-dom"
import CursoPage from "./pages/CursoPage"
import DetallePage from "./pages/DetallePage"



function App() {
 
  return (

<>
<h1>hola</h1>
  <BrowserRouter>
    <Routes>
      <Route path='/detalle' element={<DetallePage/>}/>
      <Route path='/curso' element={<CursoPage/>}/>
    </Routes>
  </BrowserRouter>
</>
  )
}

export default App
