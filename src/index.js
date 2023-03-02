import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import About from './pages/About';
import CartProvider from './store/CartProvider';
import ProductDetails from './components/Catalogue/ProductDetails';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {path: '/', element: <Home/>},
//   {path: '/about', element: <About/>},
//   {path: '/store', element: <App/>},
//   {path: '/store/:productId' , element: <ProductDetails/>},
//   {path: '/signup', element: <SignUp/>},
//   {path: '/profile', element: <Profile/>}
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/store' element={<App/>}/>
        <Route path='/store/:productId' element={<ProductDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<div>Page not defined</div>}/>
      </Routes>
    </BrowserRouter>

    </CartProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
