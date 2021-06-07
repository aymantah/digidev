import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc:
        "Blogs, Portfolio, E-commerce websites, Menu websites, Agency websites ...  ",
      img:
        "https://cdn.dribbble.com/users/4373137/screenshots/15774890/media/c0820b8753a4859bd6e24f8f24670219.png?compress=1&resize=1600x1200",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc:
        "Lifestyle Mobile Apps, Social Media Mobile Apps, Utility Mobile Apps & E-commerce Mobile Apps (Hybrid & Native)",
      img:
        "https://cdn.dribbble.com/users/4373137/screenshots/15774901/media/43c8a18df278c405db90df100529ccad.png?compress=1&resize=1600x1200",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "All design components that makes a brand stand out from competitors, and recognizable to consumers.",
      img:
        "https://cdn.dribbble.com/users/4373137/screenshots/15774827/media/6bba023013b57b8bfe43272103e9c69c.png?compress=1&resize=1600x1200",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
