import Table from "./components/Table"
import {Routes,Route} from "react-router-dom"
import UpdateUser from "./components/UpdateUser"
import AddUser from "./components/AddUser"

function App() {
  
  return (
    <>
   <Routes>
    <Route path="/" element={<Table/>}/>
    <Route path="/user/:id" element={<UpdateUser/>}/>
    <Route path="/adduser" element={<AddUser/>}/>
   </Routes>
    </>
  )
}

export default App
