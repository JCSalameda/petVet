import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>Freya's Care</Link>
            <p className={styles.desc}>
              A new standard in pet wellness. Luxury care for exceptional companions.
            </p>
          </div>
          
          <div className={styles.links}>
            <h3>Navigation</h3>
            <Link href="#services">Services</Link>
            <Link href="#philosophy">Our Philosophy</Link>
            <Link href="#testimonials">Community</Link>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>123 Wellness Avenue, NY 10012</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>hello@freyascare.com</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Freya's Care. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
