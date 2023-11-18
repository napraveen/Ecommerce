import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Home2 from './pages/Home2';
import ProductPage from './pages/ProductPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/product/:slug" element={<ProductPage />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
