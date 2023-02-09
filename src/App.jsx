import DetalleCursado from /pages/DetalleCursado



function App() {
 

  return (
    return(
      <Router>
        <MainNavbar/>
        <Routes>
          <Route path='/cursos' element={<DetalleCursado/>}/>
        </Routes>
      </Router>
  )
}

export default App
