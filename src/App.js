<<<<<<< HEAD
// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};
=======
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}
>>>>>>> refs/remotes/origin/main

export default App;