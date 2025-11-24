import { useState, useEffect } from 'react';
import artboardOne from '../assets/artboardOne.png';
import artboardTwo from '../assets/artboardTwo.png';
import artboardThree from '../assets/artboardThree.png';

const images = [
  artboardOne,
  artboardTwo,
  artboardThree,
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}