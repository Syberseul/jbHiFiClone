import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import Item from "./components/item";
import Banner from "./components/banner";
import SubBanner from "./components/subBanner";
import SideMenu from "../../common/sideMenu/sideMenu";

import { RecommendWrapper, RecommendTitle, ItemContainer } from "./style";

function Home({ menuOpen, items, fetchHomeData }) {
  useEffect(() => {
    fetchHomeData();
  }, []);

  return !menuOpen ? (
    <div>
      <Banner />
      <SubBanner />
      <RecommendWrapper>
        <RecommendTitle>Recommended for you</RecommendTitle>
        <ItemContainer>
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ItemContainer>
      </RecommendWrapper>
    </div>
  ) : (
    <SideMenu />
  );
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
