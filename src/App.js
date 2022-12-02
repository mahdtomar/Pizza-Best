// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>   
    </div>
  );
}

export default App;
