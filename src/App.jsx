import {Routes, Route} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Faq from './pages/faq/Faq';
import Contact from './pages/contact/Contact';
import LoginAndRegistration from './pages/login-and-registration/LoginAndRegistration';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Checkout from './pages/checkout/Checkout';  
import PageNotFound from './pages/page-not-found/PageNotFound';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Style
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/category" element={<Category />}/> */}
        <Route path="/category/:category" element={<Category />}/>
        {/* <Route path="/womens-clothing" element={<Category />}/>
        <Route path="/electronics" element={<Category />}/>
        <Route path="/jewelry" element={<Category />}/> */}
        <Route path="/product" element={<Product />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login-and-registration" element={<LoginAndRegistration />}/>
        <Route path="/shopping-cart" element={<ShoppingCart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;