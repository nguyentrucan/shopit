import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' Component={Home} exact />
          </Routes>
          <Routes>
            <Route path='/product/:id' Component={ProductDetails} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
