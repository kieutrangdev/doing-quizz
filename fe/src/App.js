import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import {
  Outlet, Link
} from "react-router-dom";
import Header from './components/header/Header';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="app-container">
      <div className='header-container'>
       <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
        <div className='app-content'>
            <Outlet/>
        </div>
      </div>
   
      <div>
        
      </div>
    </div>
  );
}

export default App;
