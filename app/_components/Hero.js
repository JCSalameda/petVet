import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobs}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            A New Standard<br />
            in Pet Wellness.
          </h1>
          <p className={styles.subtitle}>
            Where luxury human skincare meets a warm, architectural wellness retreat. 
            Veterinary care, grooming, and curated retail—all under one beautifully designed roof.
          </p>
          <div className={styles.actions}>
            <a href="#hub" className={styles.ctaPrimary}>Book a Visit</a>
            <button className={styles.ctaSecondary}>Explore Services</button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/hero.webp" 
              alt="Premium pet wellness retreat" 
              fill
              priority
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className={styles.accentCard}>
            <p>Exceptional care<br />for exceptional companions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
