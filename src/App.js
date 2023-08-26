// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Compare from './pages/Compare';
import Medication from './pages/Medication';
import NavBar from "./components/NavBar";

const App = () => {
 return (
    <div style={{ backgroundColor:"#ECE2E2", minHeight: "100vh", paddingBottom: "2rem" }} className='font-bold'>
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/compare" elementkk={<Compare />} />
          <Route path="/medications" element={<Medication />} />
       </Routes>
    </div>
 );
};

export default App;