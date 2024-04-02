import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>

        <header className='App-header'>
          <p>
            <a href='login'>Go to login page </a>
          </p>
          <p>
            <a href='/signup'>Go to signup page</a>
          </p>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
