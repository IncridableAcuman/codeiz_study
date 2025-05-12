import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // TODO: Send form data to backend API here
    alert("Thank you for reaching out!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-6 py-12 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600 text-lg">We’d love to hear from you! Feel free to reach out with any questions or feedback.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>support@e-study.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+998 90 123 45 67</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 mt-1"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 mt-1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 mt-1"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>    
    </>

  );
};

export default Contact;
