import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6hYDB9rSn-qpMTrvsB2iXhmxVGQ6qA-0",
  authDomain: "temple-booking-app.firebaseapp.com",
  projectId: "temple-booking-app",
  storageBucket: "temple-booking-app.firebasestorage.app",
  messagingSenderId: "348741909207",
  appId: "1:348741909207:web:2306403ded051e1800ce92"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fff7ed,#ffedd5,#ffffff)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    paddingBottom: "40px",
  },
  hero: {
    height: "520px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('https://github.com/harinathvadde/temple-booking-app/blob/main/RAM.png?raw=true')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    backgroundPosition: "center top",
    position: 'relative',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  heroTitle: {
    fontSize: "72px",
    fontWeight: "bold",
    marginTop: "180px",
    marginBottom: "10px",
    textShadow: "0 4px 10px rgba(0,0,0,0.7)",
  },
  heroText: {
    fontSize: "28px",
    color: '#ffffff',
    fontWeight: "600",
    textShadow: "0 4px 10px rgba(0,0,0,0.7)",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    padding: "40px 20px",
  },
  card: {
    background: "white",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid #fdba74",
    marginTop: "8px",
    marginBottom: "18px",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#f97316,#ef4444)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  infoBox: {
    background: "#fff7ed",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "15px",
    color: "#444",
    fontWeight: "600",
  },
  ruleBox: {
    background: "#f0fdf4",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "15px",
    color: "#444",
    fontWeight: "600",
  },
};

export default function TempleBookingApp() {
  const [familyName, setFamilyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [poojaType, setPoojaType] = useState("Sri Rama Daily Pooja");
  const [message, setMessage] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [showBookingPage, setShowBookingPage] = useState(false);

  const [confirmedBookings, setConfirmedBookings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "bookings"),
      (snapshot) => {
        const today = new Date().toISOString().split('T')[0];

        const bookings = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((booking) => booking.selectedDate >= today)
          .sort((a, b) => a.selectedDate.localeCompare(b.selectedDate));

        setConfirmedBookings(bookings);
      }
    );

    return () => unsubscribe();
  }, []);

  if (showSplash) {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, #f97316 0%, #7c2d12 100%)',
          color: 'white',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            letterSpacing: '4px',
            textShadow: '0 0 25px rgba(255,255,255,0.8)',
            marginBottom: '20px',
            lineHeight: '1.4',
          }}
        >
          🌸🙏 WELCOME 🙏🌸
          <br />
          🛕 JAI SREE RAM 🛕
          <br />
          ✨🌺🚩🌺✨
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#ffedd5',
            textShadow: '0 0 12px rgba(255,255,255,0.5)',
            fontWeight: '600',
          }}
        >
          🌸 శ్రీ కోదండరామాలయం 🌸
          <br />
          🚩 బండకిందపల్లి 🚩
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        

        

        <div>
          <div>
            <h1 style={styles.heroTitle}>
              శ్రీ కోదండరామాలయం
            </h1>
            <p style={styles.heroText}>
              బండకిందపల్లి
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px 10px' }}>
        <div style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
              <h2 style={{ fontSize: '32px', color: '#ea580c', margin: 0 }}>
                సేవ బుకింగ్ క్యూ జాబితా
              </h2>

              <button
                onClick={() => {
                  setShowBookingPage(true);
                }}
                style={{
                  background: 'linear-gradient(90deg,#f97316,#dc2626)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                ➕ కొత్త బుకింగ్
              </button>
            </div>

            {confirmedBookings.length === 0 ? (
              <div style={styles.infoBox}>
                ఇంకా ఎలాంటి బుకింగ్స్ లేవు
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '17px',
                    background: 'white',
                    borderRadius: '18px',
                    overflow: 'hidden',
                  }}
                >
                  <thead>
                    <tr style={{ background: '#ea580c', color: 'white' }}>
                      <th style={{ padding: '16px' }}>క్యూ</th>
                      <th style={{ padding: '16px' }}>తేదీ</th>
                      <th style={{ padding: '16px' }}>కుటుంబ పేరు</th>
                      <th style={{ padding: '16px' }}>మొబైల్</th>
                      <th style={{ padding: '16px' }}>సేవ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {confirmedBookings.map((booking, index) => (
                      <tr
                        key={index}
                        style={{
                          textAlign: 'center',
                          background: index % 2 === 0 ? '#fff7ed' : '#ffffff',
                          borderBottom: '1px solid #fed7aa',
                        }}
                      >
                        <td style={{ padding: '15px', fontWeight: '700', color: '#c2410c' }}>
                          {index + 1}
                        </td>

                        <td style={{ padding: '15px', fontWeight: '600' }}>
                          {booking.selectedDate}
                        </td>

                        <td style={{ padding: '15px', fontWeight: '600' }}>
                          {booking.familyName}
                        </td>

                        <td style={{ padding: '15px' }}>
                          {booking.mobile}
                        </td>

                        <td style={{ padding: '15px' }}>
                          {booking.poojaType}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </div>

      {showBookingPage && (
      <div id="booking-section" style={styles.container}>
        <div style={styles.card}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'inline-block', background: '#ffedd5', color: '#c2410c', padding: '10px 18px', borderRadius: '999px', fontWeight: '600', marginBottom: '16px' }}>
              దేవాలయ సేవ నమోదు
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>
              మీ కుటుంబ సేవ బుక్ చేసుకోండి
            </h2>

            <p style={{ color: '#6b7280', marginTop: '8px', fontSize: '18px' }}>
              మీ సేవ తేదీని ఎంచుకుని వెంటనే బుకింగ్ నిర్ధారించండి.
            </p>
          </div>

          <div>
            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px', fontSize: '18px' }}>
                కుటుంబ పెద్ద పేరు
              </label>
              <input
                type="text"
                placeholder="మీ కుటుంబ పేరు నమోదు చేయండి"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px', fontSize: '18px' }}>
                మొబైల్ నంబర్
              </label>
              <input
                type="tel"
                placeholder="మొబైల్ నంబర్ నమోదు చేయండి"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px', fontSize: '18px' }}>
                సేవ తేదీ ఎంచుకోండి
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', marginBottom: '8px', fontSize: '18px' }}>
                సేవ రకం
              </label>
              <select
                value={poojaType}
                onChange={(e) => setPoojaType(e.target.value)}
                style={styles.input}
              >
                <option>శ్రీ రామ నిత్య పూజ</option>
                <option>కోదండరాముల ప్రత్యేక సేవ</option>
                <option>పుట్టినరోజు అర్చన</option>
                <option>వివాహ వార్షికోత్సవ పూజ</option>
              </select>
            </div>

            <button
              onClick={() => {
                if (!familyName || !mobile || !selectedDate) {
                  setMessage("దయచేసి అన్ని వివరాలు నమోదు చేయండి");
                  return;
                }

                const alreadyBooked = confirmedBookings.find(
                  (booking) => booking.selectedDate === selectedDate
                );

                if (alreadyBooked) {
                  setMessage(
                    `❌ ${selectedDate} తేదీ ఇప్పటికే ${alreadyBooked.familyName} గారి పేరుతో బుక్ అయింది`
                  );
                  return;
                }

                setMessage(
                  `🙏 ${familyName} గారి సేవ బుకింగ్ విజయవంతంగా నమోదు అయింది.

📅 సేవ తేదీ: ${selectedDate}

🛕 శ్రీ కోదండరామాలయం, బండకిందపల్లి

🔔 మీ సేవ తేదీకి ముందు గుర్తు పెట్టుకోండి.

జై శ్రీరామ్ 🚩`
                );

                if ('Notification' in window) {
                  Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                      new Notification('🛕 సేవ బుకింగ్ నిర్ధారణ', {
                        body: `${familyName} గారి సేవ ${selectedDate} తేదీకి విజయవంతంగా బుక్ అయింది.`,
                      });
                    }
                  });
                }

                addDoc(collection(db, "bookings"), {
                  familyName,
                  mobile,
                  selectedDate,
                  poojaType,
                });

                
              }}
              style={styles.button}
            >
              సేవ బుకింగ్ నిర్ధారించండి
            </button>

            {message && (
              <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#15803d', borderRadius: '16px', padding: '16px', fontWeight: '600', textAlign: 'center', marginTop: '16px' }}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div>
          <div style={styles.card}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#c2410c', marginBottom: '18px' }}>
              దేవాలయ సమాచారం
            </h2>

            <div style={{ color: '#374151', fontSize: '18px' }}>
              <div style={styles.infoBox}>
                ప్రాంతం: బండకిందపల్లి
              </div>

              <div style={styles.infoBox}>
                Temple: శ్రీ కోదండరామాలయం
              </div>

              <div style={styles.infoBox}>
                బుకింగ్ రకం: నిత్య కుటుంబ సేవ
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#c2410c', marginBottom: '18px' }}>
              దేవాలయ నియమాలు
            </h2>

            <div>
              <div style={styles.ruleBox}>
                ఒక కుటుంబానికి ఒక సేవ తేదీ మాత్రమే అనుమతి.
              </div>

              <div style={styles.ruleBox}>
                ముందుగా బుక్ చేసిన వారికి ముందుగా అవకాశం.
              </div>

              <div style={styles.ruleBox}>
                బుక్ చేసిన తేదీ మళ్లీ అందుబాటులో ఉండదు.
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      <div style={{ textAlign: 'center', padding: '40px', color: '#666', fontWeight: '600', fontSize: '17px' }}>
        శ్రీ కోదండరామాలయం సేవ బుకింగ్ పోర్టల్
      </div>
    </div>
  );
}
