import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`)
      .then((res) => {
        const data = res.data.articles
          .filter(article => article.urlToImage) // only keep with images
          .slice(0, 5) // top 5
          .map((article, index) => ({
            id: index,
            title: article.title,
            description: article.description,
            image: article.urlToImage,
          }));
        setSlides(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mb-8">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-20 left-10 text-white max-w-xl">
            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg opacity-90">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button onClick={prevSlide} className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronLeft size={30} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Slider;
