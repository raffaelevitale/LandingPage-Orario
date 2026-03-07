"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Clock } from "lucide-react";
import styles from "./DarkModeDemo.module.css";

const lesson = {
  subject: "Informatica",
  teacher: "Verdi A.",
  classroom: "Lab. INF 1",
  startTime: "10:00",
  endTime: "11:00",
  color: "#059669",
};

function DemoCard({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className={`${styles.demoPanel} ${theme === "dark" ? styles.panelDark : styles.panelLight}`}>
      <div className={styles.panelLabel}>{theme === "dark" ? "Dark Mode" : "Light Mode"}</div>

      {/* Mini header */}
      <div className={styles.miniHeader}>
        <div className={styles.miniTitle}>Orario</div>
        <div className={styles.miniSubtitle}>Classe 3A INF</div>
      </div>

      {/* Day tabs */}
      <div className={styles.miniDayTabs}>
        {["Lun", "Mar", "Mer"].map((d, i) => (
          <div key={d} className={`${styles.miniTab} ${i === 1 ? styles.miniTabActive : ""}`}>
            {d}
          </div>
        ))}
      </div>

      {/* Lesson card */}
      <div className={styles.miniCard} style={{ borderLeftColor: lesson.color }}>
        <div className={styles.miniCardContent}>
          <div className={styles.miniSubject}>{lesson.subject}</div>
          <div className={styles.miniDetail}>
            <User size={10} />
            <span>{lesson.teacher}</span>
          </div>
          <div className={styles.miniDetail}>
            <MapPin size={10} />
            <span>{lesson.classroom}</span>
          </div>
        </div>
        <div className={styles.miniTime}>
          <div className={styles.miniStartTime}>{lesson.startTime}</div>
          <div className={styles.miniEndTime}>- {lesson.endTime}</div>
        </div>
      </div>

      {/* Second card placeholder */}
      <div className={styles.miniCardGhost}>
        <div className={styles.ghostLine} style={{ width: "60%" }} />
        <div className={styles.ghostLine} style={{ width: "40%" }} />
      </div>
    </div>
  );
}

export function DarkModeDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Bello di giorno, bello di notte</h2>
        <p className={styles.sectionSubtitle}>
          Supporto completo per dark mode. L&apos;app si adatta automaticamente
          al tema del tuo dispositivo.
        </p>
      </motion.div>

      <motion.div
        className={styles.demoGrid}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <DemoCard theme="light" />
        <DemoCard theme="dark" />
      </motion.div>
    </section>
  );
}
