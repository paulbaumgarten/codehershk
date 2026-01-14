"use client";

import { FiMail, FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
            Contact <span className="text-primary-600">Us</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Questions, suggestions, or ideas? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* General Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-2xl mb-6">
                <FiMail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Inquiries</h3>
              <p className="text-gray-600 mb-6">
                For general questions about our organization, partnerships, or collaborations.
              </p>
              <a
                href="mailto:outreach@codehershk.org"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group text-lg"
              >
                <HiOutlineMail className="w-5 h-5 mr-2" />
                <span className="border-b border-transparent group-hover:border-primary-600">
                  outreach@codehershk.org
                </span>
              </a>
            </div>
          </div>

          {/* Hackathon Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-50 p-4 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hackathon Questions</h3>
              <p className="text-gray-600 mb-6">
                For questions specifically about the Hackathon event, registration, or participation.
              </p>
              <a
                href="mailto:hackathon@codehershk.org"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group text-lg"
              >
                <HiOutlineMail className="w-5 h-5 mr-2" />
                <span className="border-b border-transparent group-hover:border-primary-600">
                  hackathon@codehershk.org
                </span>
              </a>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-50 p-4 rounded-2xl mb-6">
                <FiInstagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect with Us</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest news, events, and announcements on Instagram.
              </p>
              <a
                href="https://instagram.com/codehershk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group text-lg"
              >
                <FiInstagram className="w-5 h-5 mr-2" />
                <span className="border-b border-transparent group-hover:border-primary-600">
                  @codehershk
                </span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}










// "use client";

// import { useState, FormEvent } from "react";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

// export default function ContactPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://formspree.io/f/movjlwrl", {
//         method: "POST",
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           message: message,
//         }),
//       });
  
//       if (response.ok) {
//         setName("");
//         setEmail("");
//         setMessage("");
//         MySwal.fire({
//           icon: "success",
//           title: "Message Sent!",
//           text: "Thanks! Your message has been successfully submitted.",
//           confirmButtonColor: "#2563eb",
//         });
//       } else {
//         throw new Error("Submission failed");
//       }
//     } catch {
//       MySwal.fire({
//         icon: "error",
//         title: "Oops!",
//         text: "Something went wrong. Please try again.",
//         confirmButtonColor: "#ef4444",
//       });
//     }
//   };  

//   return (
//     <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
//       {/* Title Section */}
//       <section className="pt-8">
//         <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
//           Contact Us
//         </h1>
//         <p className="text-text-700 text-lg">
//           Questions, suggestions, or ideas? We’d love to hear from you!
//         </p>
//       </section>

//       {/* Form Section - currently nonfunctional
//       <section className="p-6 bg-white rounded-xl shadow space-y-4">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block mb-1 font-medium text-text-800">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium text-text-800">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block mb-1 font-medium text-text-800">
//               Message
//             </label>
//             <textarea
//               id="message"
//               required
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
//           >
//             Send
//           </button>
//         </form>
//       </section> */}

//       {/* Contact Info */}
//       <section className="space-y-2 pb-8">
//         <p className="text-text-600">
//           {/* Prefer email? */}
//           For general questions, reach us at:{" "}
//           <a href="mailto:outreach@codehershk.org" className="text-primary-500 underline">
//             outreach@codehershk.org
//           </a>
//         </p>
//         <p className="text-text-600">
//           {/* Prefer email? */}
//           For questions regarding the Hackathon, reach us at:{" "}
//           <a href="mailto:hackathon@codehershk.org" className="text-primary-500 underline">
//             hackathon@codehershk.org
//           </a>
//         </p>
//         <p className="text-text-600">
//           Or find us on Instagram:{" "}
//           <a
//             href="https://instagram.com/codehershk"
//             target="_blank"
//             rel="noreferrer"
//             className="text-primary-500 underline"
//           >
//             @codehershk
//           </a>
//         </p>
//       </section>
//     </main>
//   );
// }
