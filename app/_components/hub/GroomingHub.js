"use client";

import { useState } from "react";
import styles from "./HubShared.module.css";
import Image from "next/image";

const PACKAGES = [
  { id: "basic", name: "The Essential Refresh", price: 65, duration: "45 mins", image: "/images/grooming.webp", desc: "Bath, brush out, ear cleaning, and nail trim." },
  { id: "full", name: "The Signature Spa", price: 120, duration: "90 mins", image: "/images/grooming.webp", desc: "Full haircut, deep conditioning, blueberry facial, and paw balm." }
];

export default function GroomingHub() {
  const [view, setView] = useState("packages"); // packages, calendar, payment, appointments
  const [appointments, setAppointments] = useState([]);
  
  // Booking State
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [petCategory, setPetCategory] = useState("Cat (Shorthair)");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const startBooking = (pkg) => {
    setSelectedPackage(pkg);
    setView("calendar");
  };

  const handleCalendarSubmit = (e) => {
    e.preventDefault();
    setView("payment");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: `APT-${Math.floor(Math.random() * 10000)}`,
      package: selectedPackage.name,
      pet: petCategory,
      date: selectedDate,
      time: selectedTime,
      price: selectedPackage.price,
      status: "Confirmed"
    };
    setAppointments([newAppointment, ...appointments]);
    setView("appointments");
    // Reset booking state
    setSelectedPackage(null);
    setSelectedDate("");
    setSelectedTime("");
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status: "Cancelled" } : a));
  };

  if (view === "calendar") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Select Availability</h2>
          <button className={styles.buttonOutline} onClick={() => setView("packages")}>← Back to Packages</button>
        </div>

        <form className={styles.form} onSubmit={handleCalendarSubmit}>
          <div className={styles.summaryBox}>
            <h3>{selectedPackage.name}</h3>
            <p>${selectedPackage.price} • {selectedPackage.duration}</p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Pet Category</label>
            <select className={styles.select} value={petCategory} onChange={(e) => setPetCategory(e.target.value)}>
              <option>Cat (Shorthair)</option>
              <option>Cat (Longhair / Fluffy)</option>
              <option>Kitten (Under 6 months)</option>
              <option>Bird / Exotic (Consultation)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Date</label>
            <input className={styles.input} type="date" required value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Time Slot</label>
            <select className={styles.select} required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="">Select an available time...</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:30 PM">04:30 PM</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>Continue to Payment</button>
        </form>
      </div>
    );
  }

  if (view === "payment") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Confirm Booking</h2>
          <button className={styles.buttonOutline} onClick={() => setView("calendar")}>← Back to Calendar</button>
        </div>

        <form className={styles.form} onSubmit={handlePaymentSubmit}>
          <div className={styles.summaryBox}>
            <h3>Total: ${selectedPackage.price}</h3>
            <p>{selectedDate} at {selectedTime}</p>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Card Number (Mock Payment)</label>
            <input className={styles.input} type="text" placeholder="**** **** **** ****" required />
          </div>
          <button type="submit" className={styles.button}>Pay & Confirm</button>
        </form>
      </div>
    );
  }

  if (view === "appointments") {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Appointments</h2>
          <button className={styles.buttonOutline} onClick={() => setView("packages")}>← Book Another</button>
        </div>

        {appointments.length === 0 ? (
          <div className={styles.emptyState}>No appointments found</div>
        ) : (
          <div className={styles.grid}>
            {appointments.map(apt => (
              <div key={apt.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{apt.package}</h3>
                <p className={styles.subtitle}>{apt.pet}</p>
                <p className={styles.subtitle}>{apt.date} at {apt.time}</p>
                <p style={{ marginTop: "1rem", color: apt.status === "Cancelled" ? "red" : "green" }}>
                  Status: {apt.status}
                </p>
                {apt.status !== "Cancelled" && (
                  <button className={styles.buttonOutline} style={{ marginTop: "1rem", borderColor: "red", color: "red" }} onClick={() => cancelAppointment(apt.id)}>
                    Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // DEFAULT: Packages View
  return (
    <div className={styles.container}>
      <div className={styles.header} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h2 className={styles.title}>Grooming Spa</h2>
          <p className={styles.subtitle}>Elevated hygiene and styling experiences.</p>
        </div>
        <button className={styles.buttonOutline} onClick={() => setView("appointments")}>My Appointments</button>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map(pkg => (
          <div key={pkg.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={pkg.image} alt={pkg.name} fill style={{objectFit:"cover"}} />
            </div>
            <h3 className={styles.cardTitle}>{pkg.name}</h3>
            <p className={styles.subtitle} style={{ marginBottom: "0.5rem" }}>{pkg.desc}</p>
            <p className={styles.cardPrice}>${pkg.price} • {pkg.duration}</p>
            
            <button className={styles.button} onClick={() => startBooking(pkg)}>
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
