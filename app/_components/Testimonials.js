import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    quote: "Finally, a veterinary space that doesn't smell like bleach and fear. Oliver actually pulled me inside.",
    author: "Sarah M.",
    pet: "Oliver, Golden Retriever",
    gradient: "linear-gradient(135deg, #E8845A 0%, #D4956A 100%)"
  },
  {
    id: 2,
    quote: "The grooming spa is exceptional. Bella's coat has never looked better, and she was completely relaxed when I picked her up.",
    author: "James T.",
    pet: "Bella, Persian Cat",
    gradient: "linear-gradient(135deg, #7A8B6F 0%, #3D6B63 100%)"
  },
  {
    id: 3,
    quote: "An absolute paradigm shift in pet care. The curated retail section has supplements I couldn't find anywhere else.",
    author: "Elena R.",
    pet: "Max & Luna, Frenchies",
    gradient: "linear-gradient(135deg, #C2703E 0%, #4A3F39 100%)"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Community Voices</h2>
        </div>

        <div className={styles.carousel}>
          {testimonials.map((t) => (
            <div key={t.id} className={`glass-panel ${styles.card}`}>
              <p className={styles.quote}>"{t.quote}"</p>
              
              <div className={styles.authorArea}>
                <div 
                  className={styles.avatar} 
                  style={{ background: t.gradient }}
                />
                <div className={styles.authorInfo}>
                  <span className={styles.author}>{t.author}</span>
                  <span className={styles.pet}>{t.pet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
