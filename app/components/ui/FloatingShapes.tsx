"use client";

import styles from "./FloatingShapes.module.css";

export function FloatingShapes() {
  return (
    <div className={styles.container} aria-hidden="true">
      {/* Dot grid pattern */}
      <div className={styles.dotGrid} />

      {/* Gradient mesh blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      {/* Geometric accents */}
      <div className={styles.lineAccent} />
      <div className={styles.circleAccent} />
    </div>
  );
}
