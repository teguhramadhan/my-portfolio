"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaTiktok, FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-darkText">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-accent"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center mb-12 max-w-2xl mx-auto"
        >
          <p>Let's connect through social media!</p>
          <p> Feel free to DM or email me</p>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-darkText hover:text-accent transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-darkText hover:text-accent transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-darkText hover:text-accent transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-3xl text-darkText hover:text-accent transition-colors"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
