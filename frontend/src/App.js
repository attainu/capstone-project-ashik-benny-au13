import {BrowserRouter as Router,Route} from  'react-router-dom';
import {useEffect} from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProtuctedRoute  from './components/route/ProtuctedRoute';

import Home  from './components/Home';
import ProductDetails  from './components/products/ProductDetails';
import Register  from './components/user/Register';
import Login  from './components/user/Login';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';

import {loadUser} from './actions/userActions';
import store from './store';


function App() {

  // to avoid changing state while refreshing page(user wont logOut)
  useEffect(() => {
    store.dispatch(loadUser());
  },[])


  return (
    <Router>

    <div className="App">
     <Header />
      <div className="container container-fluid">
          < Route path="/" component ={Home} exact />
          < Route path="/product/:id" component ={ProductDetails} exact />
          < Route path="/login" component ={Login} exact />
          < Route path="/register" component ={Register} exact />
          < ProtuctedRoute path="/profile" component ={Profile} exact />
          < ProtuctedRoute path="/profile/update" component ={UpdateProfile} exact />
          < ProtuctedRoute path="/password/update" component ={UpdatePassword} exact />
          < Route path="/password/forgot" component ={ForgotPassword} exact />
      </div>
     <Footer />
    
    </div>
    </Router>
  );
}

export default App;
