// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Compare from './pages/Compare';
import Medication from './pages/Medication';
import NavBar from "./components/NavBar";

const App = () => {
 return (
    <>
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/medication" element={<Medication />} />
       </Routes>
    </>
 );
};

export default App;