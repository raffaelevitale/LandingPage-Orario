"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogIn, UserSearch, CalendarCheck } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    icon: LogIn,
    title: "Accedi con la tua email",
    description:
      "Usa la tua email istituzionale per accedere. Sicuro e immediato, nessuna password da ricordare.",
    color: "#2563eb",
  },
  {
    number: "02",
    icon: UserSearch,
    title: "Seleziona classe o docente",
    description:
      "Scegli la tua classe o cerca il tuo nome tra i docenti. Filtri per anno e settore.",
    color: "#0d9488",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Consulta il tuo orario",
    description:
      "Visualizza le lezioni giorno per giorno. Ricevi notifiche prima di ogni lezione.",
    color: "#2563eb",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="how-it-works" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Come funziona</h2>
        <p className={styles.sectionSubtitle}>
          Tre semplici passaggi per avere il tuo orario sempre a portata di mano.
        </p>
      </motion.div>

      <div className={styles.stepsRow}>
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className={styles.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.stepNumber} style={{ color: step.color }}>
              {step.number}
            </div>
            <div
              className={styles.stepIcon}
              style={{ background: `${step.color}10`, color: step.color }}
            >
              <step.icon size={26} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>

            {i < steps.length - 1 && (
              <div className={styles.connector} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
