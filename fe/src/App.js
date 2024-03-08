import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import {
  BrowserRouter, Link, Route, Routes
} from "react-router-dom";
import Header from './components/header/Header';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header/>
      <div>
        <button>
          <Link to="/users">go to user page</Link>
        </button>
        <button>
          <Link to="/admins">go to admin page</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
