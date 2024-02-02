import NavScroll from './component/NavScroll';
import Main from './component/Main';
import './css/App.css';
import "./css/reset.css";
import { Routes, Route, Link } from 'react-router-dom'
import Productlist from './component/Productlist';
import Footer from './component/Footer';
import Company from './component/Company';

function App() {
  return (
    <div className="App">
      <div>
        <div className='logoBox'>
        </div>
        <NavScroll/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/product' element={<Productlist/>}/>
          <Route path='/cart' element={<></>}/>
          <Route path='/myPage' element={<></>}/>
          <Route path='/customer' element={<></>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
