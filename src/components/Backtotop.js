import React from "react";
import { useState, useEffect } from "react";
export default function Backtotop() {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setfirst(true);
      } else {
        setfirst(false);
      }
    });
  }, []);
  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {first && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            height: "50px",
            width: "50px",
            right: "50px",
            fontSize: "30px",
            background: "orange",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={scrollup}
        >
          ^
        </button>
      )}
    </div>
  );
}
