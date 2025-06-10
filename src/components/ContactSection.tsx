"use client"; // Opsional, hanya jika Anda ingin animasi Framer Motion berjalan di sisi client atau jika ini akan menjadi form yang dikelola state React

import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-darkBg text-darkText">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-accent"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl shadow-2xl p-8 md:p-12 border border-slate-700">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-center mb-8"
          >
            Tertarik untuk berkolaborasi atau sekadar menyapa? Jangan ragu untuk
            menghubungi saya!
          </motion.p>

          <form className="grid grid-cols-1 gap-6">
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              type="text"
              placeholder="Subject"
              className="p-4 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              placeholder="Your Message"
              rows={6}
              className="p-4 rounded-lg bg-slate-700 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              type="submit"
              className="bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Send Message
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mt-10"
          >
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkText hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkText hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.73.084-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.322 3.298 1.21.946-.262 1.94-.392 2.934-.397 1.004.005 1.998.135 2.944.397 2.298-1.532 3.297-1.21 3.297-1.21.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-darkText hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 0l-9.518 7.091-9.518-7.091h19.036zm-19.518 15.341v-12.833l9.92 7.391 9.92-7.391v12.833h-19.84z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
