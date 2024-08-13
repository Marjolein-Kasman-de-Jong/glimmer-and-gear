import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Context
import { AuthContext } from './context/AuthContext';

// Pages
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Faq from './pages/faq/Faq';
import Contact from './pages/contact/Contact';
import LoginAndRegistration from './pages/login-and-registration/LoginAndRegistration';
import Profile from './pages/profile/Profile';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Checkout from './pages/checkout/Checkout';
import PageNotFound from './pages/page-not-found/PageNotFound';

// Components
import PageHeader from './components/page-header/PageHeader';
import PageFooter from './components/page-footer/PageFooter';

// Style
import './App.css';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className='page-wrapper'> {/* Needed to push PageFooter to the bottom of the screen */}
        <PageHeader />
        <Routes>
          <Route
            path='/glimmer-and-gear'
            element={<Home />}
          />
          <Route
            path='/category/:category'
            element={<Category />}
          />
          <Route
            path='/product/:id'
            element={<Product />}
          />
          <Route
            path='/faq'
            element={<Faq />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/login-and-registration'
            element={isLoggedIn ?
              <Navigate to='/profile' />
              :
              <LoginAndRegistration />}
          />
          <Route
            path='/profile'
            element={isLoggedIn ?
              <Profile />
              :
              <Navigate to='/login-and-registration' />}
          />
          <Route
            path='/shopping-cart'
            element={<ShoppingCart />}
          />
          <Route
            path='/checkout'
            element={<Checkout />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </div>
      <PageFooter />
    </>
  );
}

export default App;