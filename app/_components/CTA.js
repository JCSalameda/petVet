import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Begin Your Journey</h2>
          <p className={styles.subtitle}>
            Experience a new standard of care. Book a consultation, schedule a grooming session, 
            or explore our retail collection today.
          </p>
          <a href="#hub" className={styles.button}>Book a Visit</a>
        </div>
        
        {/* Abstract Architectural Accent */}
        <div className={styles.accent1} />
        <div className={styles.accent2} />
      </div>
    </section>
  );
}
