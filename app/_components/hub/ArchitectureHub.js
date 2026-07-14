"use client";

import styles from "./HubShared.module.css";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const DESIGNS = [
  { id: 1, name: "The Minimalist Chalet", image: "/images/hero.webp", desc: "A sleek, warm wood enclosure blending seamlessly into modern living spaces." },
  { id: 2, name: "The Bauhaus Retreat", image: "/images/hero.webp", desc: "Geometric lines and breathable terracotta materials for optimal temperature control." },
  { id: 3, name: "The Ambient Pod", image: "/images/hero.webp", desc: "Curved aesthetic with frosted glass and built-in climate systems." }
];

export default function ArchitectureHub() {
  const whatsappMessage = encodeURIComponent("Hello, I would like to consult with an architect regarding a custom pet house design.");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Bespoke Pet Architecture</h2>
        <p className={styles.subtitle}>Custom-designed habitats that compliment your home's aesthetic.</p>
      </div>

      <div className={styles.grid} style={{ marginBottom: "3rem" }}>
        {DESIGNS.map(design => (
          <div key={design.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={design.image} alt={design.name} fill style={{objectFit:"cover"}} />
            </div>
            <h3 className={styles.cardTitle}>{design.name}</h3>
            <p className={styles.subtitle}>{design.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(255,255,255,0.7)", padding: "2rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", color: "var(--espresso)", marginBottom: "1rem" }}>Commission a Custom Build</h3>
        <p style={{ color: "var(--espresso-light)", maxWidth: "600px", marginBottom: "2rem" }}>
          Our in-house architects work with you to design and construct habitats that meet the specific behavioral needs of your pet while matching your interior design language. 
        </p>
        
        <a 
          href={`https://wa.me/15551234567?text=${whatsappMessage}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.whatsappButton}
        >
          <MessageCircle size={24} />
          Consult an Architect
        </a>
      </div>
    </div>
  );
}
