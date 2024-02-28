import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
import Home from './Pages/home';
import About from './Pages/About';
import Detail from './Pages/Detail';
import Login from './Pages/Login';
import ComputerApplication from './Pages/ComputerApplication';
import ComputerScience from './Pages/ComputerScience';
import PersonalId from './Pages/personalId';
import CreateStudent from './Pages/CreateStudent';



function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-right'/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="department/:id" element={<ComputerApplication />} />
        <Route path="create_student/:id" element={<CreateStudent />} />
        {/* <Route path="cs" element={<ComputerScience/>} /> */}
        <Route path='student_fees/:id' element={<PersonalId/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
