import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/order-review' element={<OrderReview/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
