"use client";

import styles from "./PhoneMockup.module.css";

const mockLessons = [
  { subject: "Matematica", teacher: "Rossi M.", time: "8:00 - 9:00", color: "#0a72ef", room: "Aula 12" },
  { subject: "Italiano", teacher: "Bianchi L.", time: "9:00 - 10:00", color: "#de1d8d", room: "Aula 12", current: true },
  { subject: "Informatica", teacher: "Verdi A.", time: "10:00 - 11:00", color: "#171717", room: "Lab. INF 1", isLab: true },
  { subject: "Inglese", teacher: "Ferrari S.", time: "11:00 - 12:00", color: "#ff5b4f", room: "Aula 12" },
];

const days = ["Lun", "Mar", "Mer", "Gio", "Ven"];

export function PhoneMockup() {
  return (
    <div className={styles.perspective}>
      <div className={styles.phone}>
        {/* Notch */}
        <div className={styles.notch} />

        {/* Screen */}
        <div className={styles.screen}>
          {/* Status bar */}
          <div className={styles.statusBar}>
            <span>9:41</span>
            <div className={styles.statusIcons}>
              <span>&#9679;&#9679;&#9679;</span>
            </div>
          </div>

          {/* App header */}
          <div className={styles.appHeader}>
            <div className={styles.appTitle}>Orario</div>
            <div className={styles.appSubtitle}>Classe 3A INF</div>
          </div>

          {/* Day tabs */}
          <div className={styles.dayTabs}>
            {days.map((d, i) => (
              <div
                key={d}
                className={`${styles.dayTab} ${i === 1 ? styles.dayTabActive : ""}`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Current lesson banner */}
          <div className={styles.currentBanner}>
            <span className={styles.bannerIcon}>&#9203;</span>
            <div className={styles.bannerText}>
              <div className={styles.bannerSubject}>Italiano</div>
              <div className={styles.bannerTime}>9:00 - 10:00</div>
            </div>
            <div className={styles.bannerBadge}>32 min</div>
          </div>

          {/* Lesson cards */}
          <div className={styles.lessons}>
            {mockLessons.map((lesson, i) => (
              <div
                key={i}
                className={`${styles.lessonCard} ${lesson.current ? styles.lessonCurrent : ""}`}
                style={{ borderLeftColor: lesson.color }}
              >
                <div className={styles.lessonContent}>
                  <div className={styles.lessonHeader}>
                    <span className={styles.lessonSubject}>{lesson.subject}</span>
                    {lesson.isLab && <span className={styles.labBadge}>LAB</span>}
                  </div>
                  <div className={styles.lessonDetail}>{lesson.teacher}</div>
                  <div className={styles.lessonDetail}>{lesson.room}</div>
                </div>
                <div className={styles.lessonTime}>
                  <div className={styles.lessonStartTime}>
                    {lesson.time.split(" - ")[0]}
                  </div>
                  <div className={styles.lessonEndTime}>
                    - {lesson.time.split(" - ")[1]}
                  </div>
                  {lesson.current && (
                    <div className={styles.currentBadge}>Ora</div>
                  )}
                </div>
                {lesson.current && (
                  <div className={styles.progressWrap}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom tab bar */}
          <div className={styles.bottomBar}>
            <div className={styles.bottomTab}>
              <div className={styles.tabIcon}>&#127891;</div>
              <span>Alunni</span>
            </div>
            <div className={`${styles.bottomTab} ${styles.bottomTabActive}`}>
              <div className={styles.tabIcon}>&#128197;</div>
              <span>Orario</span>
            </div>
            <div className={styles.bottomTab}>
              <div className={styles.tabIcon}>&#128101;</div>
              <span>Docenti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
