import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHeadset,
  FaEnvelopeOpenText,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PageHero from "../components/PageHero";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

declare module "leaflet" {
  namespace Routing {
    function control(options: any): any;
  }
}


const DefaultIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;


const Routing: React.FC = () => {
  const map = useMap();

  React.useEffect(() => {
  if (!navigator.geolocation) {
    console.warn("Geolocation not supported by this browser.");
    return;
  }

  let routingControl: any = null; 

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const userLocation = L.latLng(latitude, longitude);
      const knetLocation = L.latLng(5.602544, -0.194018);

     routingControl = L.Routing.control({
  waypoints: [userLocation, knetLocation],
  routeWhileDragging: true,
  showAlternatives: false,
  addWaypoints: false,
  lineOptions: { styles: [{ color: "#0066ff", weight: 5 }] },
  createMarker: (_: number, wp: any) => {
    if (
      Math.abs(wp.latLng.lat - knetLocation.lat) < 0.0005 &&
      Math.abs(wp.latLng.lng - knetLocation.lng) < 0.0005
    ) {
      return null; 
    }
    return L.marker(wp.latLng, { icon: DefaultIcon });
  },
}).addTo(map);


const routingContainers = document.querySelectorAll(".leaflet-routing-container");
if (routingContainers.length > 1) {
  for (let i = 1; i < routingContainers.length; i++) {
    routingContainers[i].remove();
  }
}


      map.setView(userLocation, 13);
    },
    (error) => console.error("Geolocation error:", error)
  );

  return () => {
    if (routingControl) {
      try {
        map.removeControl(routingControl);
      } catch (e) {}
    }
  };
}, [map]);




  return null;
};

const Contact: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    comment: "",
  });

  const [status, setStatus] = useState<"success" | "error" | "warning" | null>(
    null
  );
  const [message, setMessage] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setStatus("warning");
      setMessage("⚠️ reCAPTCHA not ready yet. Try again in a moment.");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.comment.trim()) {
      setStatus("warning");
      setMessage("⚠️ Please fill in all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      setStatus(null);
      setMessage("Submitting...");

      const token = await executeRecaptcha("contact_form");
      const payload = { ...form, recaptchaToken: token };

      const response = await fetch("https://knet-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log(response)

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Message sent successfully!");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          comment: "",
        });
      } else {
        setStatus("error");
        setMessage(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
      setMessage("❌ Network or server error. Please try again later.");
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setMessage("");
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageHero
          title="Contact Us"
          subtitle="To provide exceptional world class telecommunication services"
        />
      </motion.div>

      {/* CONTACT INFO BOXES */}
      <section
  className="bg-cover bg-center py-5"
  style={{ backgroundImage: "url('/images/contact.png')" }}
>
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
    <div className="group bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:bg-knetBlue">
      <FaMapMarkerAlt className="text-knetBlue group-hover:text-white text-3xl mx-auto mb-3 transition-all duration-300" />
      <h4 className="text-gray-800 group-hover:text-[#bdbcbf] font-semibold uppercase text-xs mb-1 transition-all duration-300">
        K-NET
      </h4>
      <p className="text-gray-600 group-hover:text-[#bdbcbf] text-sm transition-all duration-300">
        No.12 Roman Ridge Street, Roman Ridge, Accra, Ghana
      </p>
    </div>

    <div className="group bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:bg-knetBlue">
      <FaHeadset className="text-knetBlue group-hover:text-white text-3xl mx-auto mb-3 transition-all duration-300" />
      <h4 className="text-gray-800 group-hover:text-[#bdbcbf] font-semibold uppercase text-xs mb-1 transition-all duration-300">
        Let's Talk
      </h4>
      <p className="text-gray-600 group-hover:text-[#bdbcbf] text-sm transition-all duration-300">
        <a href="tel:+233302769306" className="hover:text-[#bdbcbf]">
          Front Desk: +233 302 769 306
        </a>
        <br />
        <a href="tel:+233302769445" className="hover:text-[#bdbcbf]">
          Sales: +233 302 769 445
        </a>
      </p>
    </div>

    <div className="group bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:bg-knetBlue">
      <FaEnvelopeOpenText className="text-knetBlue group-hover:text-white text-3xl mx-auto mb-3 transition-all duration-300" />
      <h4 className="text-gray-800 group-hover:text-[#bdbcbf] font-semibold uppercase text-xs mb-1 transition-all duration-300">
        E-mail Us
      </h4>
      <p className="text-gray-600 group-hover:text-[#bdbcbf] text-sm transition-all duration-300">
        <a
          href="mailto:info@knetgh.com?subject=Let's Talk"
          className="hover:text-[#bdbcbf]"
        >
          info@knetgh.com
        </a>
      </p>
    </div>

    <div className="group bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:bg-knetBlue">
      <FaClock className="text-knetBlue group-hover:text-white text-3xl mx-auto mb-3 transition-all duration-300" />
      <h4 className="text-gray-800 group-hover:text-[#bdbcbf] font-semibold uppercase text-xs mb-1 transition-all duration-300">
        Available 24 hours
      </h4>
      <p className="text-gray-600 group-hover:text-[#bdbcbf] text-sm transition-all duration-300">
        <a href="tel:+233302770833" className="hover:text-[#bdbcbf]">
          Service Desk: +233 302 770 833
        </a>
      </p>
    </div>
  </div>
</section>


      {/* FORM SECTION */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-5"
          >
            <h3 className="text-2xl font-semibold text-knetBlue mb-6 text-center">
              Send Us a Message
            </h3>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none"
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none"
              required
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company (optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number (optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none"
            />

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country (optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none"
            />

            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-knetBlue outline-none h-32 resize-none"
              required
            />

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 rounded-md font-medium transition-all duration-200 ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-knetBlue hover:bg-knetDark text-white"
              }`}
            >
              {submitting ? "Submitting..." : "Send Message"}
            </button>

            {message && (
              <p
                className={`text-center mt-2 font-medium ${
                  status === "success"
                    ? "text-green-600"
                    : status === "error"
                    ? "text-red-600"
                    : "text-yellow-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          {/* THANK YOU SECTION */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-10">
            <div>
              <h5 className="text-knetBlue text-2xl font-medium mb-4">
                Thank you for your interest in K-NET
              </h5>
              <p className="text-knetBlue text-lg mb-6">
                Fill out the form and we'll be in touch soon!
              </p>
            </div>

            <div className="flex justify-center items-center mt-12">
              <motion.img
                src="/contact.png"
                alt="K-NET Logo"
                className="w-[22rem] h-[22rem] drop-shadow-2xl mx-auto"
                animate={{
                  y: [0, -25, 0],
                  rotateY: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION with routing */}
      <section className="p-0">
        <div className="w-full h-[760px] md:h-[560px]" id="routing-map">
          <MapContainer
            center={[5.602544, -0.194018]}
            zoom={16}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[5.602544, -0.194018]}>
              <Popup>K-NET Headquarters</Popup>
            </Marker>

            {/* ✅ Routing directions */}
            <Routing />
          </MapContainer>
        </div>
      </section>
    </>
  );
};

export default Contact;
