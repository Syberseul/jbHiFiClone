import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import Item from "./components/item";

import { RecommendWrapper, RecommendTitle, ItemContainer } from "./style";

function Home(props) {
  const { menuOpen, items } = props;

  useEffect(() => {
    props.fetchHomeData();
  }, []);

  if (menuOpen === false) {
    return (
      <RecommendWrapper>
        <RecommendTitle>Recommended for you</RecommendTitle>
        <ItemContainer>
          {items.slice(0, 4).map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ItemContainer>
      </RecommendWrapper>
    );
  } else {
    return <div>This will show when menu is open</div>;
  }
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
  items: state.getIn(["home", "items"]),
});

const mapDispatch = (dispatch) => ({
  fetchHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
});

export default connect(mapState, mapDispatch)(Home);
