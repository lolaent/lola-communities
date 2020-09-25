import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    box-shadow: 0 0 5px black;
    margin: 10px;
    padding: 10px;
  }

  .slick-prev {
    left: 0;
    z-index: 1;
  }

  .slick-next {
    right: 0;
    z-index: 1;
  }
`;

const SlideImg = styled.img`
  width: 100%;
`;

const SliderSettings = {
  className: 'center',
  centerMode: true,
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 4,
  speed: 500,
  autoplay: true,
};

const CommunitiesCarousel = (props) => (
  <StyledSlider {...SliderSettings}>
    {props.communities.map(({ slug, data, content }) => (
      <div key={slug}>
        {data.image && <SlideImg alt={data.name} src={data.image} />}
        <h3>{data.name}</h3>
        <p>{content}</p>
      </div>
    ))}
  </StyledSlider>
);

export default CommunitiesCarousel;
