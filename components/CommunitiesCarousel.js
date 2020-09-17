import React from 'react';
import Slider from "react-slick";

class CommunitiesCarousel extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      autoplay: true
    };

    return (
      <Slider {...settings}>
        {this.props.communities.map(({ slug, data, content }) => (
          <div key={slug}>
            {data.image &&
              <img src={data.image} />
            }
            <h3>{data.name}</h3>
            <p>{content}</p>
          </div>
        ))}
      </Slider>
    );
  }
}

export default CommunitiesCarousel;
