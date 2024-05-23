import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header"
// import Footer from "./components/Footer"
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import About from "./pages/About.jsx";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
   
      <Routes>
        <Route path="/" element={<Home />} />
    <Route path='/sign-in' element={<Signin />}/>
    <Route path='/sign-up' element={<Signup />}/>
    <Route path='/about' element={<About />}/>
    {/* <Route path='/profile' element={<Profile />}/> */}
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
