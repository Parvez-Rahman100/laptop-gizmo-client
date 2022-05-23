import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AllParts from './Pages/AllParts/AllParts';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import PartsDetails from './Pages/PartsDetails/PartsDetails';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Routes>
      <Route path='partsDetails/:id' element={<PartsDetails></PartsDetails>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/parts' element={<RequireAuth><AllParts></AllParts></RequireAuth>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
