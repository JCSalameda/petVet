import Link from "next/link";
import { Menu } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Freya's Care
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/#services" className={styles.link}>Services</Link>
          <Link href="/#philosophy" className={styles.link}>Philosophy</Link>
          <Link href="/#testimonials" className={styles.link}>Testimonials</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </nav>
        
        <div className={styles.actions}>
          <a href="/#hub" className={styles.cta}>Book a Visit</a>
          <button className={styles.mobileMenu}>
            <Menu className={styles.icon} />
          </button>
        </div>
      </div>
    </header>
  );
}
