import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { actionCreators } from "./store";

import {
  HeaderWrapperLine1,
  HeaderWrapper,
  StoreFinder,
  MobileWrapper,
  MobileText,
  HeaderWrapperLine2,
  NavSearchWrapper,
  Img,
  PhoneImg,
  NavSearch,
  IconsWrapper,
  SubIconWrapper,
  SubIconText,
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
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import logo from "../../static/img/logo.jpg";

function Header(props) {
  const {
    menuOpen,
    totalAmountInCart,
    toggleMenuClose,
    toggleMenuOpen,
    loggedIn,
    userName,
  } = props;

  return (
    <>
      <nav style={{ backgroundColor: "#ffec0f" }}>
        <HeaderWrapperLine1>
          <MobileWrapper
            className="__Header__MenuIcon"
            onClick={menuOpen ? toggleMenuClose : toggleMenuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
            <MobileText>Menu</MobileText>
          </MobileWrapper>
          <HeaderWrapper>
            <LocationOnIcon className="__Header__Icon" />
            <StoreFinder>Store Finder</StoreFinder>
          </HeaderWrapper>
          <Link to="/" onClick={menuOpen ? toggleMenuClose : () => {}}>
            <PhoneImg src={logo} alt="" />
          </Link>
          <HeaderWrapper>
            <HelpOutlineIcon className="__Header__Icon" />
            <StoreFinder>Help & Support</StoreFinder>
            <Link
              to="/login"
              className="__Header__Link"
              onClick={menuOpen ? toggleMenuClose : () => {}}
            >
              <MobileWrapper>
                <AccountCircleIcon />
                {loggedIn ? <p>{userName}</p> : <></>}
                <MobileText>Account</MobileText>
              </MobileWrapper>
            </Link>
            <Link
              to="/myCart"
              className="__Header__Link"
              onClick={menuOpen ? toggleMenuClose : () => {}}
            >
              <MobileWrapper>
                <ShoppingCartIcon />
                {totalAmountInCart > 0 ? (
                  <p className="__Header__Quantity">{totalAmountInCart}</p>
                ) : (
                  <></>
                )}
                <MobileText>Cart</MobileText>
              </MobileWrapper>
            </Link>
          </HeaderWrapper>
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
            <Link
              to={loggedIn ? "/wishList" : "/login"}
              className="__Header__Link"
            >
              <SubIconWrapper>
                <FavoriteBorderIcon />
                <SubIconText>Wish List</SubIconText>
              </SubIconWrapper>
            </Link>
            <Link to="/login" className="__Header__Link">
              <SubIconWrapper>
                <AccountCircleIcon />
                {loggedIn ? <p>{userName}</p> : <></>}
                <SubIconText>My Account</SubIconText>
              </SubIconWrapper>
            </Link>
            <Link to="/myCart" className="__Header__Link">
              <SubIconWrapper>
                <ShoppingCartIcon />
                {totalAmountInCart > 0 ? (
                  <p className="__Header__Quantity">{totalAmountInCart}</p>
                ) : (
                  <></>
                )}
                <SubIconText>My Cart</SubIconText>
              </SubIconWrapper>
            </Link>
          </IconsWrapper>
        </HeaderWrapperLine2>
      </nav>

      <nav style={{ backgroundColor: "#000" }}>
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
    </>
  );
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
  itemsInCart: state.getIn(["cart", "itemsInCart"]),
  totalAmountInCart: state.getIn(["cart", "totalAmount"]),
  loggedIn: state.getIn(["account", "userLoggedIn"]),
  userName: state.getIn(["account", "userName"]),
});

const mapDispatch = (dispatch) => ({
  toggleMenuOpen() {
    dispatch(actionCreators.toggleMenuOpen());
  },
  toggleMenuClose() {
    dispatch(actionCreators.toggleMenuClose());
  },
});

export default connect(mapState, mapDispatch)(Header);
