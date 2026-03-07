"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "I ragazzi non chiedono più la foto dell'orario su WhatsApp. Finalmente hanno tutto sul telefono, aggiornato in tempo reale.",
    name: "Prof.ssa Maria Rossi",
    role: "Vicepreside — Liceo Scientifico, Milano",
    initials: "MR",
    color: "#2563eb",
  },
  {
    quote:
      "L'abbiamo attivato in un giorno. Zero formazione necessaria, i ragazzi lo hanno capito subito. Il supporto è stato impeccabile.",
    name: "Dott. Luca Bianchi",
    role: "Dirigente Scolastico — ITIS, Roma",
    initials: "LB",
    color: "#0d9488",
  },
  {
    quote:
      "Prima perdevo 10 minuti ogni mattina a cercare l'aula. Adesso apro l'app e so esattamente dove andare. Le notifiche sono comodissime.",
    name: "Alessandro V.",
    role: "Studente — 4ª Informatica, Napoli",
    initials: "AV",
    color: "#7c3aed",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Chi lo usa, lo consiglia
          </h2>
          <p className={styles.sectionSubtitle}>
            Dirigenti, docenti e studenti raccontano la loro esperienza con Orario.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.cardTop}>
                <Quote size={20} className={styles.quoteIcon} />
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>
                <div
                  className={styles.authorAvatar}
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
