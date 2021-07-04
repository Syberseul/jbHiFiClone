import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { actionCreators } from "./store";

firebase.initializeApp({
  apiKey: "AIzaSyCUc-OfM2IsXZdyuti_MtMWtjsssi1od7w",
  authDomain: "amz-clone-yt-c021e.firebaseapp.com",
  projectId: "amz-clone-yt-c021e",
  storageBucket: "amz-clone-yt-c021e.appspot.com",
  messagingSenderId: "401562672618",
  appId: "1:401562672618:web:ea6987b1fc50ce20422693",
});

function LogIn(props) {
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

  const { userLogin, userLogOut } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
    });
  }, [isSignedIn]);

  var user = firebase.auth().currentUser;

  if (user) userLogin(user);

  return (
    <div>
      {isSignedIn ? (
        <div>
          <p>Signed In</p>
          <button
            onClick={() => {
              firebase.auth().signOut();
              userLogOut();
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  userLogin(user) {
    dispatch(actionCreators.userLogin(user));
  },

  userLogOut() {
    dispatch(actionCreators.userLogout());
  },
});

export default connect(null, mapDispatch)(LogIn);
