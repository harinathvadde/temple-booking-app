import { useState } from "react";

export default function TempleBookingApp() {
  const [familyName, setFamilyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [poojaType, setPoojaType] = useState("Daily Pooja");
  const [message, setMessage] = useState("");
  const [bookedDates, setBookedDates] = useState(["2026-05-15", "2026-05-18"]);
  const templeWhatsAppNumber = "919652754858";

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full font-bold shadow-md">
                Bandakindapalli Temple
              </div>
            </div>
            <h1 className="text-4xl font-bold text-orange-700">
              Sri Kodandaramalayam
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Sri Kodandaramalayam, Bandakindapalli Daily Seva & Pooja Booking System
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Family Head Name
                </label>
                <input
                  type="text"
                  placeholder="Enter family name"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Select Seva Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Seva / Pooja Type
                </label>
                <select
                  value={poojaType}
                  onChange={(e) => setPoojaType(e.target.value)}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Sri Rama Daily Pooja</option>
                  <option>Kodandaramula Special Seva</option>
                  <option>Birthday Archana</option>
                  <option>Marriage Anniversary Pooja</option>
                </select>
              </div>

              <button
                onClick={() => {
                  const whatsappNumber = templeWhatsAppNumber;
                  if (!familyName || !mobile || !selectedDate) {
                    setMessage("Please fill all details");
                    return;
                  }

                  if (bookedDates.includes(selectedDate)) {
                    setMessage("This date is already booked");
                    return;
                  }

                  setBookedDates([...bookedDates, selectedDate]);
                  setMessage(`Booking Confirmed for ${familyName} on ${selectedDate}`);

                  const whatsappMessage = `Sri Kodandaramalayam Booking Confirmed%0A%0AFamily: ${familyName}%0AMobile: ${mobile}%0ADate: ${selectedDate}%0ASeva: ${poojaType}%0A%0AThank You%0ASri Kodandaramalayam Temple Committee`;

                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank"
                  );

                  setFamilyName("");
                  setMobile("");
                  setSelectedDate("");
                  setPoojaType("Daily Pooja");
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition duration-300 text-lg shadow-lg"
              >
                Confirm Seva Booking
              </button>

              {message && (
                <div className="bg-orange-100 border border-orange-300 text-orange-800 p-4 rounded-2xl font-semibold text-center">
                  {message}
                </div>
              )}
            </div>

            <div>
              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">
                <h2 className="text-2xl font-bold text-orange-700 mb-4">
                  Reserved Seva Dates
                </h2>

                <div className="space-y-3">
                  {bookedDates.map((date, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-red-100 border border-red-200 rounded-xl p-3"
                    >
                      <span className="font-semibold text-red-700">
                        {date}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        Booked
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-green-50 rounded-2xl p-5 border border-green-200">
                <h2 className="text-2xl font-bold text-green-700 mb-3">
                  Temple Booking Rules
                </h2>

                <ul className="space-y-2 text-gray-700">
                  <li>• One Seva Date = One Family Only</li>
                  <li>• First Come First Serve Basis</li>
                  <li>• Reserved Dates Cannot Be Selected</li>
                  <li>• WhatsApp Confirmation Available</li>
                  <li>• Temple Committee Can Manage Bookings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
          <h2 className="text-3xl font-bold text-orange-700 mb-5">
            Temple Committee Dashboard
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-100 text-orange-800">
                  <th className="p-3 text-left rounded-l-xl">Family</th>
                  <th className="p-3 text-left">Mobile</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left rounded-r-xl">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">Sri Rama Family</td>
                  <td className="p-3">9876543210</td>
                  <td className="p-3">2026-05-15</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Confirmed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-3">Hanuman Seva Family</td>
                  <td className="p-3">9123456780</td>
                  <td className="p-3">2026-05-18</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Confirmed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-lg font-medium">
            QR Code Scan to Select Date and Confirm Seva Booking
          </p>
        </div>
      </div>
    </div>
  );
}
