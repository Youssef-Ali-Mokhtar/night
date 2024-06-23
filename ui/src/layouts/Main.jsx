import MainClasses from './main.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';

const Main = () => {
    return ( <div className={MainClasses['main']}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
        </Routes>
    </div> );
}
 
export default Main;