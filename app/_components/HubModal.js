"use client";

import { useState, useEffect } from "react";
import { X, ShoppingBag, Scissors, MapPin, Home } from "lucide-react";
import styles from "./HubModal.module.css";
import RetailHub from "./hub/RetailHub";
import GroomingHub from "./hub/GroomingHub";
import RelocationHub from "./hub/RelocationHub";
import ArchitectureHub from "./hub/ArchitectureHub";

export default function HubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("retail");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#hub") {
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      } else {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeHub = () => {
    // Remove the hash without triggering a scroll jump
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={closeHub} />
      
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeHub}>
          <X size={24} />
        </button>

        <div className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Service Hub</h2>
          
          <nav className={styles.nav}>
            <button 
              className={`${styles.navItem} ${activeTab === "retail" ? styles.active : ""}`}
              onClick={() => setActiveTab("retail")}
            >
              <ShoppingBag size={20} />
              Retail E-Commerce
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === "grooming" ? styles.active : ""}`}
              onClick={() => setActiveTab("grooming")}
            >
              <Scissors size={20} />
              Grooming Booking
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === "relocation" ? styles.active : ""}`}
              onClick={() => setActiveTab("relocation")}
            >
              <MapPin size={20} />
              Pet Relocation
            </button>
            <button 
              className={`${styles.navItem} ${activeTab === "architecture" ? styles.active : ""}`}
              onClick={() => setActiveTab("architecture")}
            >
              <Home size={20} />
              House Architecture
            </button>
          </nav>
        </div>

        <div className={styles.content}>
          {activeTab === "retail" && <RetailHub />}
          {activeTab === "grooming" && <GroomingHub />}
          {activeTab === "relocation" && <RelocationHub />}
          {activeTab === "architecture" && <ArchitectureHub />}
        </div>
      </div>
    </div>
  );
}
