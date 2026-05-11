import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fff7ed,#ffedd5,#ffffff)",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "40px",
  },
  hero: {
    height: "320px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://github.com/harinathvadde/temple-booking-app/blob/main/WhatsApp%20Image%202026-05-10%20at%2020.52.36.jpeg?raw=true')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  heroTitle: {
    fontSize: "52px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  heroText: {
    fontSize: "22px",
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

  const templeWhatsAppNumber = "919652754858";

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div>
          <div>
            <h1 style={styles.heroTitle}>
              Sri Kodandaramalayam
            </h1>
            <p style={styles.heroText}>
              Bandakindapalli Daily Seva Booking
            </p>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <div className="mb-8">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold mb-4">
              Temple Seva Registration
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Book Your Family Seva
            </h2>

            <p className="text-gray-500 mt-2">
              Select your seva date and confirm your booking instantly.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Family Head Name
              </label>
              <input
                type="text"
                placeholder="Enter your family name"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={styles.input}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Seva Date
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
                Seva Type
              </label>
              <select
                value={poojaType}
                onChange={(e) => setPoojaType(e.target.value)}
                style={styles.input}
              >
                <option>Sri Rama Daily Pooja</option>
                <option>Kodandaramula Special Seva</option>
                <option>Birthday Archana</option>
                <option>Marriage Anniversary Pooja</option>
              </select>
            </div>

            <button
              onClick={() => {
                if (!familyName || !mobile || !selectedDate) {
                  setMessage("Please fill all details");
                  return;
                }

                setMessage(
                  `Booking Confirmed for ${familyName} on ${selectedDate}`
                );

                const whatsappMessage = `🛕 Sri Kodandaramalayam Temple Booking %0A%0A✅ Booking Confirmed %0A%0A👨 Family Name: ${familyName}%0A📞 Mobile Number: ${mobile}%0A📅 Seva Date: ${selectedDate}%0A🙏 Seva Type: ${poojaType}%0A%0A📍 Temple: Sri Kodandaramalayam, Bandakindapalli%0A%0AThank you for booking seva.`;

                window.open(
                  `https://wa.me/${templeWhatsAppNumber}?text=${whatsappMessage}`,
                  "_blank"
                );
              }}
              style={styles.button}
            >
              Confirm Seva Booking
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
              Temple Information
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
              <div style={styles.infoBox}>
                Location: Bandakindapalli
              </div>

              <div style={styles.infoBox}>
                Temple: Sri Kodandaramalayam
              </div>

              <div style={styles.infoBox}>
                Booking Type: Daily Family Seva
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 className="text-3xl font-bold text-orange-700 mb-6">
              Temple Rules
            </h2>

            <div className="space-y-4">
              <div style={styles.ruleBox}>
                One seva date allowed per family.
              </div>

              <div style={styles.ruleBox}>
                First come first serve booking.
              </div>

              <div style={styles.ruleBox}>
                WhatsApp confirmation available.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-10 text-gray-600 font-semibold text-lg">
        Sri Kodandaramalayam Temple Seva Booking Portal
      </div>
    </div>
  );
}
