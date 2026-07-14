import Image from "next/image";
import { Activity, Scissors, ShoppingBag } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Comprehensive Care</h2>
          <p className={styles.subtitle}>
            A holistic approach to your companion's wellbeing, 
            blending medical excellence with lifestyle enrichment.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Service 1: Veterinary (Editorial Left) */}
          <div className={`${styles.card} ${styles.vetCard}`}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/vet.webp" 
                alt="Veterinary consultation" 
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
            <div className={`glass-panel ${styles.contentPanel} ${styles.contentRight}`}>
              <div className={styles.iconWrapper}>
                <Activity className={styles.icon} strokeWidth={1.5} />
              </div>
              <h3>Veterinary Medicine</h3>
              <p>
                Preventative care, diagnostics, and therapeutics delivered in a 
                fear-free environment designed to soothe.
              </p>
            </div>
          </div>

          {/* Service 2: Grooming (Editorial Right) */}
          <div className={`${styles.card} ${styles.groomingCard}`}>
            <div className={`glass-panel ${styles.contentPanel} ${styles.contentLeft}`}>
              <div className={styles.iconWrapper}>
                <Scissors className={styles.icon} strokeWidth={1.5} />
              </div>
              <h3>Boutique Grooming</h3>
              <p>
                Bespoke styling and dermatological spa treatments using 
                organic, ethically sourced formulations.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/grooming.webp" 
                alt="Pet grooming spa" 
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
          </div>

          {/* Service 3: Retail (Full Width Banner) */}
          <div className={`${styles.card} ${styles.retailCard}`}>
            <div className={styles.imageWrapperRetail}>
              <Image 
                src="/images/retail.webp" 
                alt="Curated retail products" 
                fill
                className={styles.image}
                sizes="100vw"
              />
            </div>
            <div className={`glass-panel ${styles.contentPanel} ${styles.contentCenter}`}>
              <div className={styles.iconWrapper}>
                <ShoppingBag className={styles.icon} strokeWidth={1.5} />
              </div>
              <h3>Curated Retail</h3>
              <p>
                An exclusive selection of nutritional supplements, accessories, 
                and lifestyle artifacts for the modern pet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
