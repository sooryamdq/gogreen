import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Portfolio</h2>
      <Slider {...settings}>
        <div className="px-4">
          <div className="bg-green-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">GoGreenVerz WEB</h3>
            <p>
              GoGreenVerz, a revolutionary online platform that seamlessly
              combines the worlds of sustainable real estate and NFTs on the
              Solana blockchain. This groundbreaking marketplace empowers users
              to list, buy, and sell lands with an eco-friendly focus, while
              also providing a cutting-edge NFT marketplace for digital asset
              enthusiasts.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-green-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">GoGreenVerz APP</h3>
            <p>
              An innovative app promoting environmental consciousness and
              sustainable living. Seamlessly extending our website's
              functionality, this mobile platform empowers users to engage with
              eco-friendly practices anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-green-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">InnerPro WEB</h3>
            <p>
              InnerPro Training App, a dynamic and innovative tool designed to
              elevate the training experience for young athletes. Developed with
              a focus on empowering the next generation of sports enthusiasts,
              InnerPro serves as a comprehensive training platform that is
              ideally complemented by the guidance of a coach or parent.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
