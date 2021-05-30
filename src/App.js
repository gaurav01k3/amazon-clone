import "./CSS/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";

// const promise = loadStripe(
//   "pk_test_51IuedkSC6eTZblGLk1yTyJ7WiKTzZXHJ9W0T99riCC42euH1tenzL5DSnNBWPNxDCXHgw1oe78IPZ7vQGJi36Odw00VmFtguJh"
// );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once the app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //the user just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is looged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
            <Payment />
            {/* </Elements> */}
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
