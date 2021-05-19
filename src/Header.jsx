import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://storage.googleapis.com/sm-studio-temp/trace/175d2b2d-1f86-4b35-b412-06c7ae61bb7b.png?f=38f1a1f725d002a2cf0caff187bdf4e5"
            alt=""
          />
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* logo  */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">
              {user ? "Log-out" : "Sign-In"}
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">returns</span>
            <span className="header__optionLineTwo">&orders</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__basketCount">{basket?.length}</span>
            <ShoppingCartOutlinedIcon className="header__cartIcon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
