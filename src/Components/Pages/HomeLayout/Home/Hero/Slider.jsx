import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/premium-vector/panda-is-playing-together-garden_43633-2359.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=ais"
          className="w-full h-4/5"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/94q6SSM/fotor-2023-5-18-2-17-7.png"
          className="w-full h-4/5"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/premium-psd/happy-valentines-day-bear-banner-holiday-romantic-background-mockup-with-decorative-love-hearts_169356-1308.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=ais"
          className="w-full h-4/5"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
