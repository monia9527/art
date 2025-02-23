import React from 'react'
const ContactMenu = () => {
  return (
    <div id="contact" className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Click here</span>
        </h1>

        <p className="text-lg font-semibold text-black">
          ここからご連絡いただけます！
        </p>
        <a 
          href="mailto:xxxxxx@gmail.com" 
          className="rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default ContactMenu