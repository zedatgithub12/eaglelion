import React, { useState, useEffect } from "react";

const ScrollListener = () => {
  const [nextSection, setNextSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY; // Current vertical scroll position
      const viewportHeight = window.innerHeight; // Height of the viewport
      const threshold = (70 * viewportHeight) / 100; // Convert 186dvh to pixels

      if (scrollHeight > threshold) {
        setNextSection(true);
      } else {
        setNextSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Listener</h1>
      <p>{`Next Section is ${nextSection ? "Active" : "Inactive"}`}</p>
    </div>
  );
};

export default ScrollListener;
