
import './App.css';
import {Header} from "./components/Header";
import {Home} from "./pages/home/Home";
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import { AddEdit } from './pages/home/addedit/AddEdit';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddEdit/>}/>
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
