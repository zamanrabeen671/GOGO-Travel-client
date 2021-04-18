import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Dashboard from './component/AdminPanel/Dashboard/Dashboard';
import AddService from './component/AdminPanel/AddService/AddService';
import OrderList from './component/AdminPanel/OrderList/OrderList';
import Book from './component/VisitorPannle/Book/Book';
import Login from './component/Shared/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/Shared/PrivateRoute/PrivateRoute';
import MakeAdmin from './component/AdminPanel/MakeAdmin/MakeAdmin';
import BookingList from './component/VisitorPannle/BookingList/BookingList';
import Review from './component/VisitorPannle/Review/Review';
import MangeServicce from './component/AdminPanel/ManageService/MangeServicce';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({}) 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <BookingList></BookingList>
          </PrivateRoute>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/manager">
            <MangeServicce></MangeServicce>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="*">
            <h2>404, Error Not Found!</h2>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
