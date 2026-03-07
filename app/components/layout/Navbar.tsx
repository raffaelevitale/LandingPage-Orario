"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("landing-theme", next ? "dark" : "light");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <img src="/logo.png" alt="Orario" className={styles.logo} />
          <span className={styles.brandName}>Orario</span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          <a href="#features" className={styles.link} onClick={() => setMenuOpen(false)}>
            Funzionalit&agrave;
          </a>
          <a href="#showcase" className={styles.link} onClick={() => setMenuOpen(false)}>
            Anteprima
          </a>
          <a href="#how-it-works" className={styles.link} onClick={() => setMenuOpen(false)}>
            Come funziona
          </a>
          <a href="#cta" className={styles.link} onClick={() => setMenuOpen(false)}>
            Contatti
          </a>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label="Cambia tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
