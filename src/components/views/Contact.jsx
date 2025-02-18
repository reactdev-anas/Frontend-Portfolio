import React, { useState } from "react";
import ContactImage from '../Images/Contact_2.svg'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name,
        email,
        message,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
    } else {
        console.error('Error sending message.');
    }
} catch (error) {
    console.error('Error sending message.');
}
};


  return (
    <section id="contact" className="flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Heading: Centered at the top */}
      <h2 className="  text-cyan-700   mb-10 mt-10"><span className="border-2 font-bold border-cyan-700 rounded px-4 sm:px-6 md:px-6 lg:px-7 py-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Let's Connect</span></h2>
      
      {/* Flex Container for Image and Form */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0">
        
        {/* Left Side: Image */}
        <div className="w-full sm:w-2/6 md:w-2/5 p-4">
          <img
            src={ContactImage} // Apni image ka path yahan daalo
            alt="Contact"
            className="w-full h-auto "
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 p-0 sm:p-2 md:p-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}  onChange={(e) => setName(e.target.value)}
                className="w-full  mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full  mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-cyan-700 text-white font-semibold rounded transition ease-in-out delay-75 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;