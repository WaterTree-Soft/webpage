"use client";
import React, { useState } from "react";
import HeaderWithSubtitle from "./reusable/Header";
import Image from "next/image";
import women from "../public/images/women.png";

export const ContactUs: React.FC = () => {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous error messages
    setErrorMessage("");

    // Basic validation
    if (!contact.email || !contact.subject || !contact.message) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Set button to sending state
    setButtonState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await response.json();

      if (data.success) {
        // Change button to sent state
        setButtonState("sent");

        // Clear form
        setContact({
          email: "",
          subject: "",
          message: "",
        });

        // Reset button after 5 seconds
        setTimeout(() => {
          setButtonState("idle");
        }, 5000);
      } else {
        // Handle error
        setErrorMessage(data.message || "Failed to send message");
        setButtonState("idle");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      setButtonState("idle");
    }
  };

  // Button text based on state
  const getButtonText = () => {
    switch (buttonState) {
      case "sending":
        return "Sending...";
      case "sent":
        return "Enquiry Sent ✓";
      default:
        return "Send Message";
    }
  };

  // Button style based on state
  const getButtonClass = () => {
    const baseClass = "mt-4 py-2 px-4 rounded-xl transition";
    switch (buttonState) {
      case "sending":
        return `${baseClass} bg-gray-400 text-white cursor-not-allowed`;
      case "sent":
        return `${baseClass} bg-blue-500 text-white`;
      default:
        return `${baseClass} bg-green-500 text-white hover:bg-green-600`;
    }
  };

  return (
    <section className="w-full py-10">
      <div className="w-full">
        <HeaderWithSubtitle
          header=""
          subtitle="Connecting You with the Right Solutions"
          helilightedText="Contact Us"
        />
      </div>
      <div className="flex flex-col items-center justify-around md:flex-row">
        {/* Left Side */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="relative w-80 h-full flex items-center justify-center">
            {/* Glowing background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-blue-400 blur-3xl opacity-70" />
            </div>

            <Image
              src={women}
              alt="pic"
              className="relative z-10 w-60 h-full object-cover rounded-xl"
              width={240}
              height={200}
              style={{ borderRadius: "0.75rem", objectFit: "cover" }}
            />
          </div>

          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 max-w-md">
            We'd love to hear from you! Whether you have a question about
            features, pricing, or anything else — our team is ready to answer.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 w-full max-w-md bg-blue-500/20 rounded-2xl shadow-lg backdrop-blur-md border border-black/10">
          <form
            onSubmit={submit}
            className="p-6 flex flex-col gap-4 rounded-xl"
          >
            <p className="text-xl font-semibold text-center mb-2">Contact Us</p>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                disabled={buttonState === "sending"}
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                value={contact.subject}
                onChange={(e) =>
                  setContact({ ...contact, subject: e.target.value })
                }
                disabled={buttonState === "sending"}
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                placeholder="Type your message here"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                rows={4}
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                disabled={buttonState === "sending"}
              />
            </div>

            <button
              type="submit"
              className={getButtonClass()}
              disabled={buttonState !== "idle"}
              suppressHydrationWarning
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
