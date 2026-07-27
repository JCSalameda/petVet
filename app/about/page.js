"use client";

import React from 'react';
import Image from 'next/image';
import { Briefcase, Code, MapPin, GraduationCap, Server, Bot, ShieldAlert, Cpu } from 'lucide-react';
import styles from './about.module.css';
import Navbar from '../_components/Navbar';

const AboutPage = () => {
  const projects = [
    {
      title: "Proactive DRRMD System",
      description: "Developed a proactive system for the San Juan City Disaster Risk Reduction and Management Office (DRRMD) featuring predictive, prescriptive, and descriptive analytics alongside GIS integration.",
      icon: <ShieldAlert className={styles.icon} />
    },
    {
      title: "Intelligent Dispatch & KPI Analytics",
      description: "Engineered both event-based and daily operational dispatch systems for CDRRMD daily runs. These systems are directly connected to live mapping to track exact dispatch locations in real time and utilize built-in KPI analytics to measure operational efficiency.",
      icon: <Code className={styles.icon} />
    },
    {
      title: "Personnel & Logistics Management",
      description: "Created a comprehensive personnel management and logistics tracking system to streamline staff deployment and ensure real-time visibility over equipment and resources.",
      icon: <Briefcase className={styles.icon} />
    },
    {
      title: "City Mapping & Boundary Tracking",
      description: "Engineered a comprehensive mapping system for San Juan City, featuring precise dispatch location pins, as well as city and barangay boundary demarcations.",
      icon: <MapPin className={styles.icon} />
    },
    {
      title: "IoT Integration",
      description: "Integrated IoT infrastructure, including live CCTV feeds, for real-time monitoring and dispatch visibility.",
      icon: <Server className={styles.icon} />
    },
    {
      title: "AI Chatbot with RAG",
      description: "Built an AI chatbot using retrieval-augmented generation to pull real-time values from a database and inform its responses.",
      icon: <Bot className={styles.icon} />
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.backgroundGlow}></div>
      
      <main className={styles.mainContent}>
        {/* Profile Section */}
        <section className={`${styles.glassPanel} ${styles.profileSection}`}>
          <div className={styles.imageContainer}>
            {/* The user should place their image as profile.jpg in public folder */}
            <Image 
              src="/profile.jpg" 
              alt="Juan Carlos Salameda" 
              width={250} 
              height={250} 
              className={styles.profileImage}
              priority
              onError={(e) => {
                // Fallback if image is not uploaded yet
                e.target.src = "https://ui-avatars.com/api/?name=Juan+Carlos+Salameda&background=C2703E&color=fff&size=250";
              }}
            />
            <div className={styles.imageGlow}></div>
          </div>
          
          <div className={styles.profileDetails}>
            <h1 className={styles.name}>Juan Carlos Salameda</h1>
            <h2 className={styles.role}>Lead Platform Engineer</h2>
            
            <p className={styles.bio}>
              As the Lead Platform Engineer at <strong>Freya's Care</strong>, I build the frontend systems and interactive experiences that bring this platform to life. I am a freelancer from the Philippines with extensive experience in both frontend and backend development.
            </p>
            
            <div className={styles.education}>
              <GraduationCap className={styles.eduIcon} size={24} />
              <div>
                <p className={styles.degree}>Bachelor of Science in Information Technology (BSIT)</p>
                <p className={styles.honors}>Cum Laude, Class of 2026</p>
                <p className={styles.school}>Jose Rizal University, Philippines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <Cpu className={styles.sectionIcon} size={32} />
            <h3 className={styles.sectionTitle}>Key Engineering Projects</h3>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${styles.glassPanel} ${styles.projectCard}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.projectIconWrapper}>
                  {project.icon}
                </div>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default AboutPage;
