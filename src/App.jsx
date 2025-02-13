import FooterComponent from "./component/FooterComponent"
import HeaderComponent from "./component/HeaderComponent"
import ListEmployeeComponent from "./component/ListEmployeeComponent"
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from "./component/EmployeeComponent"


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path="/" element={<ListEmployeeComponent/>}></Route>
            {/* //http://localhost:3000/employees */}
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>

            <Route path="/add-employee" element ={<EmployeeComponent/>}></Route>

            <Route path="/edit-employee/:id" element ={<EmployeeComponent/>}></Route>
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );

}

export default App
