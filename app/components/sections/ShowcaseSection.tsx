"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, GraduationCap, Clock, Coffee } from "lucide-react";
import styles from "./ShowcaseSection.module.css";

/* ── Mock data: faithful recreation of the real LessonCard ── */
const showcaseLessons = [
  {
    subject: "Matematica",
    teacher: "Rossi M.",
    classroom: "Aula 12",
    startTime: "8:00",
    endTime: "9:00",
    color: "#0a72ef",
    duration: 60,
  },
  {
    subject: "Informatica",
    teacher: "Verdi A.",
    classroom: "Lab. INF 1",
    startTime: "9:00",
    endTime: "10:00",
    color: "#171717",
    duration: 60,
    isLab: true,
    isCurrent: true,
  },
  {
    subject: "Italiano",
    teacher: "Bianchi L.",
    classroom: "Aula 12",
    startTime: "10:00",
    endTime: "11:00",
    color: "#de1d8d",
    duration: 60,
  },
  {
    subject: "Scienze",
    teacher: "Neri G.",
    classroom: "Aula 22",
    startTime: "11:00",
    endTime: "12:00",
    color: "#ff5b4f",
    duration: 60,
  },
];

const days = [
  { name: "Luned\u00ec", short: "Lun" },
  { name: "Marted\u00ec", short: "Mar" },
  { name: "Mercoled\u00ec", short: "Mer" },
  { name: "Gioved\u00ec", short: "Gio" },
  { name: "Venerd\u00ec", short: "Ven" },
];

function MockLessonCard({
  lesson,
  index,
}: {
  lesson: (typeof showcaseLessons)[0];
  index: number;
}) {
  return (
    <motion.div
      className={`${styles.lessonCard} ${lesson.isCurrent ? styles.lessonCurrent : ""}`}
      style={{ borderLeftColor: lesson.color }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <div className={styles.lessonContent}>
        <div className={styles.lessonHeader}>
          <span className={styles.lessonSubject}>{lesson.subject}</span>
          {lesson.isLab && <span className={styles.labBadge}>LAB</span>}
        </div>
        <div className={styles.lessonDetails}>
          <div className={styles.detailRow}>
            <User size={13} className={styles.detailIcon} />
            <span>{lesson.teacher}</span>
          </div>
          <div className={styles.detailRow}>
            <MapPin size={13} className={styles.detailIcon} />
            <span className={styles.bold}>{lesson.classroom}</span>
          </div>
        </div>
      </div>
      <div className={styles.lessonTime}>
        <div className={styles.startTime}>{lesson.startTime}</div>
        <div className={styles.endTime}>- {lesson.endTime}</div>
        <div className={styles.duration}>
          <Clock size={9} style={{ marginRight: 3 }} />
          {lesson.duration} min
        </div>
        {lesson.isCurrent && <div className={styles.currentBadge}>Ora</div>}
      </div>
      {lesson.isCurrent && (
        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

function MockToggle() {
  const [mode, setMode] = useState<"student" | "teacher">("student");

  useEffect(() => {
    const timer = setInterval(() => {
      setMode((m) => (m === "student" ? "teacher" : "student"));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.toggleTrack}>
      <div
        className={styles.toggleThumb}
        style={{
          transform: mode === "teacher" ? "translateX(100%)" : "translateX(0)",
        }}
      />
      <button
        className={`${styles.toggleOption} ${mode === "student" ? styles.toggleActive : ""}`}
        onClick={() => setMode("student")}
      >
        <GraduationCap size={15} />
        Studente
      </button>
      <button
        className={`${styles.toggleOption} ${mode === "teacher" ? styles.toggleActive : ""}`}
        onClick={() => setMode("teacher")}
      >
        <Coffee size={15} />
        Docente
      </button>
    </div>
  );
}

function MockDayTabs() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.dayTabs}>
      {days.map((d, i) => (
        <button
          key={d.short}
          className={`${styles.dayTab} ${i === active ? styles.dayTabActive : ""}`}
          onClick={() => setActive(i)}
        >
          {d.name}
        </button>
      ))}
    </div>
  );
}

export function ShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="showcase" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>
          Un&apos;interfaccia che parla da sola
        </h2>
        <p className={styles.sectionSubtitle}>
          Componenti reali dell&apos;app, ricreati per mostrarti cosa ti aspetta.
        </p>
      </motion.div>

      <div className={styles.showcaseGrid}>
        {/* Left: Lesson Cards */}
        <div className={styles.showcaseBlock}>
          <h3 className={styles.blockTitle}>Lezioni del giorno</h3>
          <p className={styles.blockDesc}>
            Ogni lezione mostra materia, docente, aula e orario. La lezione
            corrente ha una barra di progresso in tempo reale.
          </p>
          <div className={styles.cardsStack}>
            {showcaseLessons.map((lesson, i) => (
              <MockLessonCard key={i} lesson={lesson} index={i} />
            ))}
          </div>
        </div>

        {/* Right: Toggle + Day Tabs */}
        <div className={styles.showcaseBlock}>
          <h3 className={styles.blockTitle}>Navigazione intuitiva</h3>
          <p className={styles.blockDesc}>
            Passa da studente a docente in un tap. Scorri tra i giorni della
            settimana con le tab.
          </p>

          <div className={styles.componentDemo}>
            <div className={styles.demoLabel}>Modalit&agrave;</div>
            <MockToggle />
          </div>

          <div className={styles.componentDemo}>
            <div className={styles.demoLabel}>Giorno</div>
            <MockDayTabs />
          </div>

          {/* Mini class pills demo */}
          <div className={styles.componentDemo}>
            <div className={styles.demoLabel}>Selezione classe</div>
            <div className={styles.classPillsDemo}>
              <div className={styles.sectorHeader}>
                <span className={styles.sectorName}>INF</span>
                <span className={styles.sectorCount}>6</span>
              </div>
              <div className={styles.pillsRow}>
                {["1A", "1B", "2A", "2B", "3A", "3B"].map((cls) => (
                  <button key={cls} className={`${styles.classPill} ${cls === "3A" ? styles.classPillActive : ""}`}>
                    <span className={styles.pillYear}>{cls[0]}</span>
                    <span className={styles.pillSection}>{cls.slice(1)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
