import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { actionCreators } from "./store";

import { WrapperWithContent, LogInContainer } from "./style";

import SideMenu from "../../common/sideMenu/sideMenu";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_APP_ID,
});

function LogIn({ userLogin, userLogOut, menuOpen }) {
  const [isSignedIn, setSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
    });
  }, [isSignedIn]);

  var user = firebase.auth().currentUser;

  if (user) userLogin(user);

  return !menuOpen ? (
    <div>
      {isSignedIn ? (
        <WrapperWithContent>
          <p>Hello: {user.displayName} !</p>
          <button
            onClick={() => {
              firebase.auth().signOut();
              userLogOut();
            }}
          >
            Sign out
          </button>
        </WrapperWithContent>
      ) : (
        <LogInContainer>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </LogInContainer>
      )}
    </div>
  ) : (
    <SideMenu />
  );
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
});

const mapDispatch = (dispatch) => ({
  userLogin(user) {
    dispatch(actionCreators.userLogin(user));
  },

  userLogOut() {
    dispatch(actionCreators.userLogout());
  },
});

export default connect(mapState, mapDispatch)(LogIn);
