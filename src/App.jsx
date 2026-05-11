import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fff7ed,#ffedd5,#ffffff)",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "40px",
  },
  hero: {
    height: "420px",
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
    fontSize: "58px",
    fontWeight: "bold",
    marginBottom: "14px",
    textShadow: "0 4px 10px rgba(0,0,0,0.7)",
  },
  heroText: {
    fontSize: "28px",
    fontWeight: "600",
    textShadow: "0 4px 10px rgba(0,0,0,0.7)",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    padding: "40px 20px",
  },
  card: {
    background: "white",
    borderRadius: "30px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid #fdba74",
    marginTop: "8px",
    marginBottom: "18px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "16px",
    background: "linear-gradient(90deg,#f97316,#ef4444)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  infoBox: {
    background: "#fff7ed",
    padding: "16px",
    borderRadius: "16px",
    marginBottom: "15px",
    color: "#444",
    fontWeight: "600",
  },
  ruleBox: {
    background: "#f0fdf4",
    padding: "16px",
    borderRadius: "16px",
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
  const [confirmedBookings, setConfirmedBookings] = useState([
    {
      familyName: 'హరినాథ్ కుటుంబం',
      mobile: '6300770430',
      selectedDate: '2026-05-11',
      poojaType: 'శ్రీ రామ నిత్య పూజ',
    },
  ]);

  const templeWhatsAppNumber = "919652754858";

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div>
          <div>
            <h1 style={styles.heroTitle}>
              శ్రీ కోదండరామాలయం
            </h1>
            <p style={styles.heroText}>
              బండకిందపల్లి నిత్య సేవ బుకింగ్
            </p>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <div className="mb-8">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold mb-4">
              దేవాలయ సేవ నమోదు
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              మీ కుటుంబ సేవ బుక్ చేసుకోండి
            </h2>

            <p className="text-gray-500 mt-2">
              మీ సేవ తేదీని ఎంచుకుని వెంటనే బుకింగ్ నిర్ధారించండి.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
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
              <label className="block text-gray-700 font-semibold mb-2">
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
              <label className="block text-gray-700 font-semibold mb-2">
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
              <label className="block text-gray-700 font-semibold mb-2">
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

                setMessage(`✅ ${familyName} గారి సేవ బుకింగ్ విజయవంతంగా నమోదు అయింది`);

                setConfirmedBookings((prev) => [
                  ...prev,
                  {
                    familyName,
                    mobile,
                    selectedDate,
                    poojaType,
                  },
                ]);

                const whatsappMessage = `🛕 శ్రీ కోదండరామాలయం Temple Booking %0A%0A✅ Booking Confirmed %0A%0A👨 Family Name: ${familyName}%0A📞 మొబైల్ నంబర్: ${mobile}%0A📅 Seva Date: ${selectedDate}%0A🙏 Seva Type: ${poojaType}%0A%0A📍 దేవాలయం: శ్రీ కోదండరామాలయం, Bandakindapalli%0A%0AThank you for booking seva.`;

                window.open(
                  `https://wa.me/${templeWhatsAppNumber}?text=${whatsappMessage}`,
                  "_blank"
                );
              }}
              style={styles.button}
            >
              సేవ బుకింగ్ నిర్ధారించండి
            </button>

            {message && (
              <div className="bg-green-100 border border-green-300 text-green-700 rounded-2xl p-4 font-semibold text-center">
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div style={styles.card}>
            <h2 className="text-3xl font-bold text-orange-700 mb-6">
              దేవాలయ సమాచారం
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
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
            <h2 className="text-3xl font-bold text-orange-700 mb-6">
              దేవాలయ నియమాలు
            </h2>

            <div className="space-y-4">
              <div style={styles.ruleBox}>
                ఒక కుటుంబానికి ఒక సేవ తేదీ మాత్రమే అనుమతి.
              </div>

              <div style={styles.ruleBox}>
                ముందుగా బుక్ చేసిన వారికి ముందుగా అవకాశం.
              </div>

              <div style={styles.ruleBox}>
                వాట్సాప్ నిర్ధారణ అందుబాటులో ఉంటుంది.
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    padding: '18px',
                    borderRadius: '16px',
                    marginBottom: '15px',
                    border: '1px solid #fdba74',
                  }}
                >
                  <div style={{ fontSize: '20px', fontWeight: '700', color: '#c2410c', marginBottom: '10px' }}>
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
            )}
          </div>
        </div>

      <div className="text-center py-10 text-gray-600 font-semibold text-lg">
        శ్రీ కోదండరామాలయం సేవ బుకింగ్ పోర్టల్
      </div>
    </div>
  );
}
