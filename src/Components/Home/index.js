import React from "react";
import { connect } from "react-redux";

function Home(props) {
  const { menuOpen } = props;

  if (menuOpen === false) {
    return <div>This is the Home Page</div>;
  } else {
    return <div>This will show when menu is open</div>;
  }
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
});

const mapDispatch = (dispatch) => ({
  //..
});

export default connect(mapState, mapDispatch)(Home);
