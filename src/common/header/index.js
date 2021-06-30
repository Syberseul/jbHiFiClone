import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { actionCreator } from "./store";

import {
  HeaderWrapperLine1,
  HeaderIcon,
  StoreFinder,
  HeaderWrapperLine2,
  NavSearchWrapper,
  Img,
  NavSearch,
  IconsWrapper,
  SubIconWrapper,
  HeaderWrapperLine3,
  Line3Wrapper,
  Line3Text,
} from "./style";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import LabelIcon from "@material-ui/icons/Label";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BuildIcon from "@material-ui/icons/Build";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

import logo from "../../static/img/logo.jpg";

function Header() {
  return (
    <nav style={{ backgroundColor: "#ffec0f" }}>
      <HeaderWrapperLine1>
        <HeaderIcon>
          <LocationOnIcon className="__Header__Icon" />
          <StoreFinder>Store Finder</StoreFinder>
        </HeaderIcon>
        <HeaderIcon>
          <HelpOutlineIcon className="__Header__Icon" />
          <StoreFinder>Help & Support</StoreFinder>
        </HeaderIcon>
      </HeaderWrapperLine1>

      <HeaderWrapperLine2>
        <Link to="/">
          <Img src={logo} alt="" />
        </Link>
        <NavSearchWrapper>
          <SearchIcon className="__Header__SearchIcon" />
          <NavSearch />
        </NavSearchWrapper>
        <IconsWrapper>
          <Link to="/wishList" className="__Header__Link">
            <SubIconWrapper>
              <FavoriteBorderIcon /> Wish List
            </SubIconWrapper>
          </Link>
          <Link to="/login" className="__Header__Link">
            <SubIconWrapper>
              <AccountCircleIcon /> My Account
            </SubIconWrapper>
          </Link>
          <Link to="/myCart" className="__Header__Link">
            <SubIconWrapper>
              <ShoppingCartIcon /> My Cart
            </SubIconWrapper>
          </Link>
        </IconsWrapper>
      </HeaderWrapperLine2>

      <HeaderWrapperLine3>
        <Line3Wrapper>
          <HomeIcon className="__Header__Line3Icon" />
          <Line3Text className="__Header__Line3Text">Products</Line3Text>
        </Line3Wrapper>
        <Line3Wrapper>
          <LabelIcon className="__Header__Line3Icon" />
          <Line3Text className="__Header__Line3Text">Brands</Line3Text>
        </Line3Wrapper>
        <Line3Wrapper>
          <NotificationsNoneIcon className="__Header__Line3Icon" />
          <Line3Text className="__Header__Line3Text">Deals & Sales</Line3Text>
        </Line3Wrapper>
        <Line3Wrapper>
          <BuildIcon className="__Header__Line3Icon" />
          <Line3Text className="__Header__Line3Text">Services</Line3Text>
        </Line3Wrapper>
        <Line3Wrapper>
          <CardGiftcardIcon className="__Header__Line3Icon" />
          <Line3Text className="__Header__Line3Text">Gift Cards</Line3Text>
        </Line3Wrapper>
      </HeaderWrapperLine3>
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
