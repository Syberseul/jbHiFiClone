import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import * as banners from "../../../static/img/bannerImg";

import { BannerWrapper, BannerImgWrapper } from "./style";

function Banner() {
  return (
    <BannerWrapper>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <BannerImgWrapper>
          <img loading="lazy" src={banners.banner_1} alt="" className="img" />
        </BannerImgWrapper>
        <BannerImgWrapper>
          <img loading="lazy" src={banners.banner_2} alt="" className="img" />
        </BannerImgWrapper>
        <BannerImgWrapper>
          <img loading="lazy" src={banners.banner_3} alt="" className="img" />
        </BannerImgWrapper>
        <BannerImgWrapper>
          <img loading="lazy" src={banners.banner_4} alt="" className="img" />
        </BannerImgWrapper>
      </Carousel>
    </BannerWrapper>
  );
}

export default Banner;
