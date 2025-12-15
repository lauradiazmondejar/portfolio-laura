import { useEffect, useRef, useState } from "react";
import "./TopNav.css";

const NAV_ITEMS = [
  { id: "Planetario", label: "Planetario" },
  { id: "Origina", label: "Sobre mí" },
  { id: "Logika", label: "Formación" },
  { id: "Praxis", label: "Experiencia laboral" },
  { id: "Kodia", label: "Competencias digitales" },
  { id: "Synthia", label: "Proyectos de la carrera" },
  { id: "Cirrus", label: "Soft skills" },
];

export default function TopNav({ onNavigate }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const node = scrollRef.current;
    if (!node) return;
    const { scrollLeft, scrollWidth, clientWidth } = node;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  useEffect(() => {
    updateScrollButtons();
    const node = scrollRef.current;
    if (!node) return;
    const handleResize = () => updateScrollButtons();
    node.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      node.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollByAmount = (direction) => {
    const node = scrollRef.current;
    if (!node) return;
    const delta = direction * (node.clientWidth * 0.7);
    node.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleClick = (event, targetId) => {
    event.preventDefault();
    if (typeof onNavigate === "function") {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="top-nav" aria-label="Navegacion principal">
      <div className="top-nav__inner">
        <button
          type="button"
          className={`top-nav__chevron left ${canScrollLeft ? "is-visible" : ""}`}
          aria-label="Desplazar a la izquierda"
          onClick={() => scrollByAmount(-1)}
        >
          {"<"}
        </button>

        <div className="top-nav__links" ref={scrollRef}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="top-nav__link"
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <span className="top-nav__fade left" aria-hidden="true" />
        <span className="top-nav__fade right" aria-hidden="true" />

        <button
          type="button"
          className={`top-nav__chevron right ${canScrollRight ? "is-visible" : ""}`}
          aria-label="Desplazar a la derecha"
          onClick={() => scrollByAmount(1)}
        >
          {">"}
        </button>
      </div>
    </nav>
  );
}
