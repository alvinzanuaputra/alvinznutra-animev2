"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import 'animate.css'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="absolute"
      aria-label="Scroll to top"
    >
      <ArrowUp
        className={`${
          isVisible
            ? "animate__animated animate__fadeInLeft animate__delay-0.3s fixed bottom-5 right-5 h-8 w-8 rounded-full bg-color-primary dark:bg-color-dark p-2 text-color-dark dark:text-color-white shadow-md shadow-color-accent duration-500 ease-in-out hover:cursor-pointer hover:scale-105 sm:h-10 sm:w-10"
            : "hidden"
        }`}
      />
    </button>
  );
};
