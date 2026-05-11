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
    height: "360px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://github.com/harinathvadde/temple-booking-app/blob/main/WhatsApp%20Image%202026-05-10%20at%2020.52.36.jpeg?raw=true')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    backgroundPosition: "center top",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  heroTitle: {
    fontSize: "44px",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "0 4px 10px rgba(0,0,0,0.7)",
  },
  heroText: {
    fontSize: "20px",
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

  const [confirmedBookings, setConfirmedBookings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "bookings"),
      (snapshot) => {
        const bookings = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setConfirmedBookings(bookings);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    const audio = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=om-chanting-11091.mp3'
    );

    audio.volume = 0.6;

    audio.play().catch(() => {
      console.log('Autoplay blocked by browser');
    });

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          height: '100vh',
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
          }}
        >
          🌸🙏 WELCOME 🙏🌸
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#ffedd5',
          }}
        >
          🛕 JAI SREE RAM 🛕
          
          
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

      <div style={styles.container}>
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

                setMessage(`✅ ${familyName} గారి సేవ బుకింగ్ విజయవంతంగా నమోదు అయింది`);

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

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={styles.card}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#ea580c' }}>
              నిర్ధారించబడిన సేవ బుకింగ్స్
            </h2>

            {confirmedBookings.length === 0 ? (
              <div style={styles.infoBox}>
                ఇంకా ఎలాంటి బుకింగ్స్ లేవు
              </div>
            ) : (
              confirmedBookings.map((booking, index) => (
                <div
                  key={index}
                  style={{
                    background: '#fff7ed',
                    padding: '14px',
                    borderRadius: '16px',
                    marginBottom: '12px',
                    border: '1px solid #fdba74',
                  }}
                >
                  <div style={{ fontSize: '17px', fontWeight: '600', color: '#c2410c', marginBottom: '10px' }}>
                    📅 సేవ తేదీ: {booking.selectedDate}
                  </div>

                  <div style={{ marginBottom: '8px' }}>
                    <b>👨 కుటుంబ పేరు:</b> {booking.familyName}
                  </div>

                  <div style={{ marginBottom: '8px' }}>
                    <b>📞 మొబైల్:</b> {booking.mobile}
                  </div>

                  <div>
                    <b>🙏 సేవ:</b> {booking.poojaType}
                  </div>
                </div>
              ))
            )}        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '40px', color: '#666', fontWeight: '600', fontSize: '17px' }}>
        శ్రీ కోదండరామాలయం సేవ బుకింగ్ పోర్టల్
      </div>
    </div>
  );
}
