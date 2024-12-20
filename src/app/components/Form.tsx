"use client";
import React, { useState, useEffect, useRef } from "react";
import { createReservation, getReservations } from "../actions/reservationActions";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  interest?: string;
}

const availableDates = ["27/12/2024", "28/12/2024", "29/12/2024"];
const startTime = "09:30";
const endTime = "23:00";

const generateTimeSlots = (start: string, end: string): string[] => {
  const times: string[] = [];
  let current = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);
  const interval = 30; // 30 minutes

  while (current <= endTime) {
    times.push(current.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }));
    current = new Date(current.getTime() + interval * 60000); // Add 30 minutes
  }
  return times;
};

const timeSlots = generateTimeSlots(startTime, endTime);

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
        date: "",
        time: "",
        interest: "",
      });
      setAlertMessage("Your meeting has been scheduled successfully!");
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("Failed to schedule your meeting. Please try again.");
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
          Schedule A Meeting
        </h2>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-20 font-mono">
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

          {/* Date Field */}
          <div className="relative flex items-center sm:col-span-2">
            <select
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customBg focus:border-customBg outline-none"
            >
              <option value="">Select Date</option>
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
    <option value="">Select Time</option>
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
