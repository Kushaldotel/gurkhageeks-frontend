"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
        timer: 2000, // Close alert after 2 seconds
      });

      // Optionally, show a success message or redirect to a thank you page
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle error state or show error message
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting your message. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="relative">
      <section className="max-w-7xl mx-auto m-2 rounded-xl border shadow-sm py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-300 via-gray-200 to-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-gray-800">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-wide sm:text-5xl text-gray-800">
                Contact Us
              </h1>
              <p className="max-w-lg md:text-xl text-gray-600">
                Get in touch with our team for any questions or inquiries about
                our furniture products and services. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="container px-4 md:px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-wide">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-2">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7297115330106!2d-73.99024568423844!3d40.72911497932921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1686080400000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
