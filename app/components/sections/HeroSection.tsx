"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Clock, Shield } from "lucide-react";
import { PhoneMockup } from "../ui/PhoneMockup";
import { FloatingShapes } from "../ui/FloatingShapes";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <FloatingShapes />

      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={14} />
            <span>Usato in +15 scuole italiane</span>
          </motion.div>

          <h1 className={styles.title}>
            <motion.span
              className={styles.titleLine}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Basta confusione.
            </motion.span>
            <motion.span
              className={styles.titleAccent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              L&apos;orario, subito.
            </motion.span>
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tutto l&apos;orario in un solo posto, sempre aggiornato e facile da consultare.
            <strong> Orario rende la giornata più semplice a studenti e docenti.</strong>
          </motion.p>

          <motion.div
            className={styles.valuePills}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            <span className={styles.pill}><Check size={14} /> Gratuito per le scuole</span>
            <span className={styles.pill}><Clock size={14} /> Attivo in 24 ore</span>
            <span className={styles.pill}><Shield size={14} /> GDPR compliant</span>
          </motion.div>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <a href="https://orario.raffaelevitale.it" target="_blank" className={styles.ctaPrimary}>
              Accedi alla piattaforma
              <ArrowRight size={18} />
            </a>
            <a href="#showcase" className={styles.ctaSecondary}>
              Guarda come funziona
            </a>
          </motion.div>

          <motion.div
            className={styles.socialProof}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className={styles.avatars}>
              <div className={styles.avatar} style={{ background: "#2563eb" }}>M</div>
              <div className={styles.avatar} style={{ background: "#0d9488" }}>L</div>
              <div className={styles.avatar} style={{ background: "#1d4ed8" }}>A</div>
              <div className={styles.avatar} style={{ background: "#7c3aed" }}>S</div>
            </div>
            <span className={styles.socialText}>
              <strong>1.200+</strong> studenti lo usano ogni giorno
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.phoneSide}
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Gradient glow behind content */}
      <div className={styles.glowOrb} />
    </section>
  );
}
