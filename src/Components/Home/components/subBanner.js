import * as banner from "../../../static/img/bannerImg";

import { SubBannerWrapper } from "./style";

function SubBanner() {
  return (
    <SubBannerWrapper>
      <div className="__SubBanner__div1">
        <img src={banner.sbanner_1} alt="" className="__SubBanner__img" />
      </div>
      <div className="__SubBanner__div">
        <img src={banner.sbanner_2} alt="" className="__SubBanner__img" />
      </div>
      <div className="__SubBanner__div">
        <img src={banner.sbanner_3} alt="" className="__SubBanner__img" />
      </div>
    </SubBannerWrapper>
  );
}

export default SubBanner;
