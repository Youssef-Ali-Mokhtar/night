import MainClasses from './main.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Main = () => {
    return ( <div className={MainClasses['main']}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
        </Routes>
    </div> );
}
 
export default Main;