import './App.css'
import HelloWorld from './HelloWorld'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:343 */}
          <Route path='/' element= {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:343/employees */}
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:343/add-employee */}
          <Route path='/add-employee' element= {<EmployeeComponent/>}></Route>
          {/* // http://localhost:343/edit-employee */}
          <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>

        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
