import React, { useState } from 'react';
import Header from './common/header/header';
import Footer from './common/footer/footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Shop from './Components/shop/shop';
import Signup from './Components/login_signUp/Signup';
import Login from './Components/login_signUp/Login';
import Profile from './Components/profile/profile';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Purchases from './Components/profile/Purchases';
import AddNewProduct from './Components/AddNewProduct/AddNewProduc';

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };
  const handleAddProduct = (newProduct) => {
    // Here you can implement the logic to add the new product to your data or state
    console.log("New product added:", newProduct);
  };


  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart.slice();
    tempArr[ind].amount += d;

    if (!isNaN(tempArr[ind].amount) && tempArr[ind].amount > 0) {
      setCart(tempArr);
    } else {
      tempArr[ind].amount = 1;
      setCart(tempArr);
    }
  };

  const handleSaveProfile = (data) => {
    setProfile(data);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile">
            <Profile onSave={handleSaveProfile} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            {warning && <div className="warning">Item is already added to your cart</div>}
          </Route>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/purchase" component={Purchases} />
          <Route path="/add-product">
            {/* Pass the handleAddProduct function as a prop to the AddNewProduct component */}
            <AddNewProduct onAddProduct={handleAddProduct} />
          </Route>
          <Route path="/">
            <Home handleClick={handleClick} />
            <Shop handleClick={handleClick} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
