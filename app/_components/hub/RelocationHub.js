"use client";

import styles from "./HubShared.module.css";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function RelocationHub() {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in the Freya's Care Pet Relocation Concierge service. Could you please provide more information?");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Pet Relocation Concierge</h2>
        <p className={styles.subtitle}>Stress-free, luxury travel arrangements for your exceptional companions.</p>
      </div>

      <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "1.5rem", overflow: "hidden", marginBottom: "2rem" }}>
        {/* We will use a placeholder or the hero image since it fits the vibe */}
        <Image src="/images/hero.webp" alt="Pet Relocation" fill style={{objectFit:"cover"}} />
      </div>

      <div style={{ maxWidth: "800px" }}>
        <h3 style={{ fontSize: "1.5rem", color: "var(--espresso)", marginBottom: "1rem" }}>Seamless Global Transit</h3>
        <p style={{ color: "var(--espresso-light)", lineHeight: "1.6", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Whether you are moving across the country or relocating internationally, our dedicated concierge team handles every detail of your pet's journey. From veterinary health certificates and custom-fitted travel crates to private flight coordination and door-to-door ground transport, we ensure a safe, comfortable, and premium experience.
        </p>

        <ul style={{ color: "var(--espresso-light)", marginBottom: "3rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Dedicated travel coordinator</li>
          <li>Veterinary clearance & documentation</li>
          <li>Custom comfort travel crates</li>
          <li>Flight tracking and premium care boarding</li>
        </ul>

        <a 
          href={`https://wa.me/15551234567?text=${whatsappMessage}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.whatsappButton}
        >
          <MessageCircle size={24} />
          Speak with a Relocation Specialist
        </a>
      </div>
    </div>
  );
}
