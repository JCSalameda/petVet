import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section id="philosophy" className={styles.philosophy}>
      <div className={styles.container}>
        <div className={styles.accentBlock}>
          {/* SVG Line Art Blob */}
          <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M42.7,-62.4C55.4,-51.9,65.8,-38.4,70.5,-23.4C75.2,-8.3,74.2,8.4,68.4,23.3C62.6,38.3,51.8,51.6,38.2,60.8C24.5,70,7.9,75,-7.2,71.2C-22.3,67.4,-36,-54.9,-46.9,-44.6C-57.8,-34.3,-65.8,-21.2,-69,-7.1C-72.2,7.1,-70.6,22.2,-62.7,33.5C-54.8,44.9,-40.5,52.4,-26.2,58.3C-11.9,64.2,2.4,68.4,15.6,64.8C28.8,61.2,40.8,49.8,50.7,37.3C60.6,24.8,68.4,11.2,68.9,-2.6C69.4,-16.4,62.6,-30.3,52.4,-41.2C42.1,-52.1,28.5,-59.9,14.2,-64.1C-0.2,-68.3,-15.4,-68.9,-29.4,-63.9L42.7,-62.4Z" transform="translate(100 100)" />
          </svg>
          
          <div className={styles.content}>
            <span className={styles.label}>Our Philosophy</span>
            <blockquote className={styles.quote}>
              "We believe that a pet's health is deeply intertwined with their environment. 
              By removing the sterile anxiety of traditional clinics, we create space for true healing."
            </blockquote>
            <div className={styles.author}>
              <span className={styles.name}>Dr. Elena Rostova</span>
              <span className={styles.role}>Chief of Veterinary Medicine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
