"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../context";
import { createReservation, getReservations } from "../actions/reservationActions";
import emailjs from "@emailjs/browser";
import { formTrans, Language } from "../translations/formTrans";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  prefered?:string;
  date?: string;
  time?: string;
  interest?: string;
}

const availableDates = ["27/12/2024", "28/12/2024", "29/12/2024"];
const startTime = "11:00";
const endTime = "19:45";

const generateTimeSlots = (start: string, end: string): string[] => {
  const times: string[] = [];
  let current = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);
  const interval = 15; // 15 minutes

  while (current <= endTime) {
    times.push(current.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }));
    current = new Date(current.getTime() + interval * 60000); // Add 30 minutes
  }
  return times;
};

const timeSlots = generateTimeSlots(startTime, endTime);

const Form: React.FC = () => {
  const [language] = useAppContext(); // Get the current language from context
  const translation = formTrans[language as Language];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    prefered:"",
    date: "",
    time: "",
    interest: "",
  });

  const [bookedSlots, setBookedSlots] = useState<{ date: string; time: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>(translation.successMessage);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const reservations = await getReservations();
        setBookedSlots(reservations.map((res) => ({ date: res.date, time: res.time })));
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchBookedSlots();
  }, []);

  const isSlotBooked = (date: string, time: string): boolean => {
    return bookedSlots.some((slot) => slot.date === date && slot.time === time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_vdlqcvl", // Replace with your service ID
        "template_cqcmlxb", // Replace with your template ID
        formData as Record<string, unknown>, // Send form data as the email body
        "bz-racFIdw40qpvrn" // Replace with your public key
      );

      await createReservation({
        date: formData.date!,
        time: formData.time!,
      });

      setBookedSlots([...bookedSlots, { date: formData.date!, time: formData.time! }]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        prefered:"",
        date: "",
        time: "",
        interest: "",
      });
      setAlertMessage(translation.successMessage);
      setShowAlert(true);
    } catch (error) {
      setAlertMessage(translation.errorMessage);
      setShowAlert(true);
      console.error("Error scheduling meeting:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Form" className="bg-customText2">
      <div className="flex justify-center items-center gap-12 w-100 pb-20 pt-20">
        <h2 className="text-2xl font-bold text-center text-customBg lg:text-3xl">
          {translation.title}
        </h2>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-20 font-mono">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* First Name Field */}
          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder={translation.firstName}
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
              placeholder={translation.lastName}
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
              placeholder={translation.email}
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
              placeholder={translation.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            />
          </div>

          {/* Prefered language Field */}
          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="prefered"
              placeholder={translation.prefered}
              value={formData.prefered}
              onChange={(e) => setFormData({ ...formData, prefered: e.target.value })}
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
              <option value="">{translation.interestPlaceholder}</option>
              <option value="Apartment">Apartment</option>
              <option value="Town-House">Town House</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          {/* Date Field */}
          <div className="relative flex items-center sm:col-span-2">
            <select
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            >
              <option value="">{translation.datePlaceholder}</option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          {/* Time Field */}
          <div className="relative flex items-center sm:col-span-2">
            <select
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            >
              <option value="">{translation.timePlaceholder}</option>
              {timeSlots.map((time) => (
                <option
                  key={time}
                  value={time}
                  disabled={isSlotBooked(formData.date!, time)} // Disable time if already booked
                >
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-16 hover:shadow-lg  px-6 py-2.5 w-full text-lg bg-none lg:rounded-lg text-customBg border-2 border-customBg transition 300 ease-in-out hover:bg-customBg hover:text-white"
        >
          {loading ? translation.schedulingButton : translation.scheduleButton}
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
          color: #05052; /* Same color as the close button */
        }

        .alert-close {
          background-color: #05052d;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .alert-close:hover {
          background-color: #976f33;
          color: white;
          transition: 4ms ease-in-out
        }
      `}</style>
    </div>
  );
};

export default Form;
