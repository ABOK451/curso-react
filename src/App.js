import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/'   element={<Home/>}/>
          <Route path='/profile'   element={<Profile/>}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
