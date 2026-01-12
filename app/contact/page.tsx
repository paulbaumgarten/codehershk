"use client";

import { useState, FormEvent } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/movjlwrl", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
  
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        MySwal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks! Your message has been successfully submitted.",
          confirmButtonColor: "#2563eb",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      MySwal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };  

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Contact Us
        </h1>
        <p className="text-text-700 text-lg">
          Questions, suggestions, or ideas? We’d love to hear from you!
        </p>
      </section>

      {/* Form Section - currently nonfunctional
      <section className="p-6 bg-white rounded-xl shadow space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-text-800">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-text-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-text-800">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
          >
            Send
          </button>
        </form>
      </section> */}

      {/* Contact Info */}
      <section className="space-y-2 pb-8">
        <p className="text-text-600">
          {/* Prefer email? */}
          Reach us at:{" "}
          <a href="mailto:outreach@codehershk.org" className="text-primary-500 underline">
            outreach@codehershk.org
          </a>
        </p>
        <p className="text-text-600">
          Or find us on Instagram:{" "}
          <a
            href="https://instagram.com/codehershk"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 underline"
          >
            @codehershk
          </a>
        </p>
      </section>
    </main>
  );
}
