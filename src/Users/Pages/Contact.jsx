import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-3 text-gray-200 text-lg">
            We’d love to hear from you! Send us a message or find us on the map
            below.
          </p>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h2>

            <form className="flex flex-col space-y-5 p-6 m-6 bg-white rounded-xl shadow-inner border border-gray-100">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5124689506033!2d76.30304607481193!3d9.98163507314593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c61d4f42bb7%3A0x4cf1040870a04b2!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1731200000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
