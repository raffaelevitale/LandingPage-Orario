"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Heart, Check, Zap } from "lucide-react";
import styles from "./CTAFooter.module.css";

export function CTAFooter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      {/* CTA Section */}
      <section id="cta" className={styles.ctaSection} ref={ref}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={styles.ctaBadge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Zap size={14} />
            Attivazione gratuita
          </motion.div>

          <h2 className={styles.ctaTitle}>
            La tua scuola merita di meglio
          </h2>
          <p className={styles.ctaSubtitle}>
            Orari sempre aggiornati, consultazione immediata e un punto unico per studenti e docenti.
            Attiva Orario gratuitamente e porta ordine nella giornata scolastica.
          </p>

          <div className={styles.ctaChecks}>
            <span className={styles.ctaCheck}><Check size={16} /> Setup in 24 ore</span>
            <span className={styles.ctaCheck}><Check size={16} /> Zero costi nascosti</span>
            <span className={styles.ctaCheck}><Check size={16} /> Supporto dedicato</span>
          </div>

          <div className={styles.ctaForm}>
            <div className={styles.inputGroup}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                type="email"
                placeholder="La tua email istituzionale"
                className={styles.emailInput}
              />
            </div>
            <button className={styles.ctaButton}>
              Richiedi accesso gratuito
              <ArrowRight size={18} />
            </button>
          </div>

          <p className={styles.ctaNote}>
            Nessun impegno, nessuna carta di credito. Ti risponderemo entro 24 ore.
          </p>
        </motion.div>

        {/* Background decoration */}
        <div className={styles.ctaBg} />
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <img src="/logo.png" alt="Orario" className={styles.footerLogo} />
            <span className={styles.footerName}>Orario</span>
          </div>

          <div className={styles.footerLinks}>
            <a href="#features" className={styles.footerLink}>Funzionalit&agrave;</a>
            <a href="#showcase" className={styles.footerLink}>Anteprima</a>
            <a href="#how-it-works" className={styles.footerLink}>Come funziona</a>
            <a href="#cta" className={styles.footerLink}>Contatti</a>
          </div>

          <div className={styles.footerBottom}>
            <span className={styles.footerCopy}>
              &copy; {new Date().getFullYear()} Orario. Made with{" "}
              <Heart size={12} style={{ display: "inline", verticalAlign: "middle", color: "#e8553d" }} />{" "}
              in Italia
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
