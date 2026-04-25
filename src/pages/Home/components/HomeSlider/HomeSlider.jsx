import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./homeSlider.scss";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1974&auto=format&fit=crop",
    title: "Гүлдөр дүйнөсү",
    description: "Ар кандай учур үчүн жаңы жана кооз гүлдөр. Жакындарыңызды кубантыңыз.",
    button: "Каталогду көрүү"
  },
  {
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop",
    title: "Сүйүктүүлөр үчүн букеттер",
    description: "Ар бир кардар үчүн өзгөчө жасалган гүл композициялары.",
    button: "Букет тандоо"
  },
  {
    image: "https://i.pinimg.com/736x/3f/5c/b2/3f5cb2d47f911fa3334f96e730c3c61c.jpg",
    title: "Шаар боюнча жеткирүү",
    description: "Гүлдөрдү тез жана коопсуз жеткирүү кызматын сунуштайбыз.",
    button: "Заказ берүү"
  }
];

const HomeSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="home-slider">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={slides.length}
        infinite
        // isPlaying
        interval={4000}
      >
        <Slider className="slider-content">
          {slides.map((slide, idx) => (
            <Slide index={idx} key={idx}>
              <div className="slider-inner">
                <div className="slider-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <button
                    className="general-button"
                    onClick={() => navigate("/shop")}
                  >
                    {slide.button}
                  </button>
                </div>

                <div className="slider-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </Slide>
          ))}
        </Slider>

        <div className="slider-controls">
          <ButtonBack>{"<"}</ButtonBack>
          <DotGroup />
          <ButtonNext>{">"}</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default HomeSlider;
