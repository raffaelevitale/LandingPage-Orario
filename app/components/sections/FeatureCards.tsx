"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, RefreshCw, Users, Smartphone, Bell, Lock } from "lucide-react";
import styles from "./FeatureCards.module.css";

const features = [
  {
    icon: Zap,
    title: "2 secondi per sapere dove andare",
    description: "Apri l'app, guarda l'orario. Niente più foto sfocate su WhatsApp o file PDF da scaricare.",
    color: "#0a72ef",
    size: "large" as const,
  },
  {
    icon: RefreshCw,
    title: "Sostituzioni in tempo reale",
    description: "Collegato alla segreteria. Quando cambia un prof o un'aula, lo vedi subito sul telefono.",
    color: "#de1d8d",
    size: "large" as const,
  },
  {
    icon: Users,
    title: "Per studenti e docenti",
    description: "Un'unica app per tutta la scuola. Ogni utente vede solo ciò che gli serve.",
    color: "#171717",
    size: "small" as const,
  },
  {
    icon: Smartphone,
    title: "Funziona come un'app nativa",
    description: "Installabile sul telefono. Funziona anche senza connessione internet.",
    color: "#0a72ef",
    size: "small" as const,
  },
  {
    icon: Bell,
    title: "Mai più in ritardo",
    description: "Notifiche prima di ogni lezione con aula e docente. Sai sempre dove andare.",
    color: "#ff5b4f",
    size: "small" as const,
  },
  {
    icon: Lock,
    title: "Sicuro e conforme al GDPR",
    description: "Accesso con email istituzionale. Nessun dato personale condiviso con terzi.",
    color: "#171717",
    size: "small" as const,
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  return (
    <motion.div
      className={`${styles.card} ${feature.size === "large" ? styles.cardLarge : styles.cardSmall}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      <div className={styles.cardInner}>
        <div
          className={styles.iconWrap}
          style={{ background: `${feature.color}12`, color: feature.color }}
        >
          <feature.icon size={feature.size === "large" ? 26 : 22} />
        </div>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{feature.title}</h3>
          <p className={styles.cardDesc}>{feature.description}</p>
        </div>
      </div>
      <div className={styles.accentLine} style={{ background: feature.color }} />
    </motion.div>
  );
}

export function FeatureCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="features" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>
          Tutto ci&ograve; che serve,<br />niente di pi&ugrave;
        </h2>
        <p className={styles.sectionSubtitle}>
          Progettato attorno alle esigenze reali di studenti e docenti italiani.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
