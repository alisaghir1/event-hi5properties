"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  interest?: string; // Add interest field
}
const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    interest: "",
  });

  const [bookedSlots, setBookedSlots] = useState<{ date: string; time: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const prepareEmailData = (): Record<string, unknown> => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    interest: formData.interest,
    date: formData.date,
    time: formData.time,
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_9dw8n2b",
        "template_n4traqr",
        prepareEmailData(),
        "bz-racFIdw40qpvrn"
      );

      setBookedSlots([...bookedSlots, { date: formData.date!, time: formData.time! }]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        interest: "", 
      });
      setAlertMessage("Your meeting has been scheduled! You will receive a confirmation shortly.");
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("Failed to schedule your meeting. Please try again.");
      setShowAlert(true);
      console.error("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Form" className="bg-customText2">
      <div className="flex justify-center items-center gap-12 w-100 pb-20 pt-20">
        <h2 className="text-2xl font-bold text-center text-customBg lg:text-3xl">
          Schedule A Meeting
        </h2>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="max-w-4xl mx-auto pb-20 font-mono">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* First Name Field */}
          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="FIRST NAME"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            />
          </div>

          {/* Last Name Field */}
          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="LAST NAME"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            />
          </div>

          {/* Interest Field */}
          <div className="relative flex items-center sm:col-span-2">
            <select
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            >
              <option value="">Your Interest</option>
              <option value="Apartment">Apartment</option>
              <option value="Town-House">Town House</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-10 px-6 py-2.5 w-full text-lg bg-none lg:rounded-lg text-customBg border-2 border-customBg transition 300 ease-in-out hover:bg-customBg hover:text-white"
        >
          {loading ? "Scheduling..." : "Schedule Meeting"}
        </button>
      </form>

      {/* Custom Alert */}
      {showAlert && (
        <div className="alert-container">
          <div className="alert-box bg-customBg text-customText2">
            <p>{alertMessage}</p>
            <button onClick={() => setShowAlert(false)} className="alert-close">
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS for alert box */}
      <style jsx>{`
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .alert-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e5e0da;
          z-index: 1000;
        }

        .alert-box {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 400px;
          width: 90%;
          color: #453c35;
        }

        .alert-text {
          color: #453c35;
        }

        .alert-close {
          background-color: #453c35;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .alert-close:hover {
          background-color: #e5e0da;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Form;
