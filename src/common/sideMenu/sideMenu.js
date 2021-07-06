import React, { useState, useEffect } from "react";

import {
  SideBarWrapper,
  UpperWrapper,
  UpSingleWrapper,
  LowwerWrapper,
  LowSingleWrapper,
} from "./style";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { actionCreators as headerActionCreators } from "../header/store";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeIcon from "@material-ui/icons/Home";
import LabelIcon from "@material-ui/icons/Label";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BuildIcon from "@material-ui/icons/Build";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

function SideMenu(props) {
  const { menuOpen, loggedIn, toggleMenuOpen, toggleMenuClose } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth > 850) toggleMenuClose();

  return (
    <SideBarWrapper>
      <UpperWrapper>
        <UpSingleWrapper>
          <div>
            <HomeIcon className="__SideMenu__Icon" />
            Products
          </div>
          <div>{">"}</div>
        </UpSingleWrapper>
        <UpSingleWrapper>
          <div>
            <LabelIcon className="__SideMenu__Icon" />
            Brands
          </div>
          <div>{">"}</div>
        </UpSingleWrapper>
        <UpSingleWrapper>
          <div>
            <NotificationsNoneIcon className="__SideMenu__Icon" />
            Deals & Sales
          </div>
          <div>{">"}</div>
        </UpSingleWrapper>
        <UpSingleWrapper>
          <div>
            <BuildIcon className="__SideMenu__Icon" />
            Services
          </div>
          <div>{">"}</div>
        </UpSingleWrapper>
        <UpSingleWrapper>
          <div>
            <CardGiftcardIcon className="__SideMenu__Icon" />
            Gift Cards
          </div>
          <div>{">"}</div>
        </UpSingleWrapper>
      </UpperWrapper>
      <LowwerWrapper>
        <Link
          to={loggedIn ? "/wishList" : "/login"}
          className="__SideMenu__Link"
          onClick={menuOpen ? toggleMenuClose : toggleMenuOpen}
        >
          <LowSingleWrapper>
            <FavoriteBorderIcon className="__SideMenu__Icon" />
            Wish List
          </LowSingleWrapper>
        </Link>
        <LowSingleWrapper>
          <LocationOnIcon className="__SideMenu__Icon" />
          Store Finder
        </LowSingleWrapper>
        <LowSingleWrapper>
          <HelpOutlineIcon className="__SideMenu__Icon" />
          Help & Support
        </LowSingleWrapper>
      </LowwerWrapper>
    </SideBarWrapper>
  );
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
  loggedIn: state.getIn(["account", "userLoggedIn"]),
});

const mapDispatch = (dispatch) => ({
  toggleMenuClose() {
    dispatch(headerActionCreators.toggleMenuClose());
  },

  toggleMenuOpen() {
    dispatch(headerActionCreators.toggleMenuOpen());
  },
});

export default connect(mapState, mapDispatch)(SideMenu);
