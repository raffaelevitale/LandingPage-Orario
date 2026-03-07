"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 8000, suffix: "+", label: "Scuole in Italia", prefix: "" },
  { value: 300, suffix: "+", label: "Orari caricati", prefix: "" },
  { value: 100, suffix: "%", label: "Gratuito", prefix: "" },
  { value: 0, suffix: "s", label: "Tempo di setup", prefix: "<1" },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  animate,
}: {
  value: number;
  suffix: string;
  prefix: string;
  animate: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!animate) return;

    if (prefix) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [animate, value, prefix]);

  return (
    <span className={styles.statValue}>
      {prefix || display.toLocaleString("it-IT")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                animate={inView}
              />
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
