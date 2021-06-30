import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { actionCreator } from "./store";

import {
  HeaderWrapperLine1,
  StoreFinder,
  HeaderWrapperLine2,
  NavSearch,
  IconsWrapper,
} from "./style";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import logo from "../../static/img/logo.jpg";

function Header() {
  return (
    <nav>
      <HeaderWrapperLine1>
        <div className="__Header__Line1">
          <LocationOnIcon className="__Header__Icon" />
          <StoreFinder>Store Finder</StoreFinder>
        </div>
        <div className="__Header__Line1">
          <HelpOutlineIcon className="__Header__Icon" />
          <StoreFinder>Help & Support</StoreFinder>
        </div>
      </HeaderWrapperLine1>

      <HeaderWrapperLine2>
        <Link to="/">
          <img src={logo} alt="" className="__Header__Logo" />
        </Link>
        <NavSearch />
        <SearchIcon className="__Header__SearchIcon" />
        <IconsWrapper>
          <Link to="/wishList" className="__Header__Link">
            <div>
              <FavoriteBorderIcon /> Wish List
            </div>
          </Link>
          <Link to="/login" className="__Header__Link">
            <div>
              <AccountCircleIcon /> My Account
            </div>
          </Link>
          <Link to="/myCart" className="__Header__Link">
            <div>
              <ShoppingCartIcon /> My Cart
            </div>
          </Link>
        </IconsWrapper>
      </HeaderWrapperLine2>
    </nav>
  );
}

const mapState = (state) => ({
  totalItem: state.getIn(["header", "totalItem"]),
  loggedIn: state.getIn(["header", "loggedIn"]),
});

const mapDispatch = (dispatch) => ({
  //...
});

export default connect(mapState, mapDispatch)(Header);
