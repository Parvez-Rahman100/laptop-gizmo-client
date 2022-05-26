import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import PartsDetails from './Pages/PartsDetails/PartsDetails';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import AddReview from './Pages/DashBoard/AddReview';
import Users from './Pages/DashBoard/Users';
import ManageItems from './Pages/DashBoard/ManageItems';
import MyPortfolio from './Pages/MyPorfolio/MyPortfolio';

function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/partsDetails/:id' element={<RequireAuth><PartsDetails></PartsDetails></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        <Route path='addreview' element={<AddReview></AddReview>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
        <Route path='addproduct' element={<ManageItems></ManageItems>}></Route>
        
        </Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
