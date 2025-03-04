"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-12 md:pt-24 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Copyright Notice
        </h1>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Copyright Information
            </h2>
            <p className="mb-4">
              © {new Date().getFullYear()} Ultimate PR. All rights reserved.
            </p>
            <p>
              All content, design, graphics, and other intellectual materials on
              the Ultimate PR application and website are owned by Ultimate PR
              and are protected by applicable copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Permitted Use
            </h2>
            <p className="mb-4">
              Users of the Ultimate PR application are granted a limited,
              non-exclusive license to use the application for personal,
              non-commercial purposes. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using the application to track personal fitness data</li>
              <li>Creating and managing workout templates</li>
              <li>Analyzing personal performance metrics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Prohibited Use
            </h2>
            <p className="mb-4">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Copying, modifying, or distributing any part of the application
              </li>
              <li>
                Reverse engineering or attempting to extract the source code
              </li>
              <li>Removing any copyright or proprietary notices</li>
              <li>Using the application for any commercial purposes</li>
              <li>Creating derivative works based on the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Third-Party Content
            </h2>
            <p>
              Ultimate PR may include third-party content, such as images,
              graphics, or software components. Such content is subject to their
              respective owners' copyright terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Copyright Infringement
            </h2>
            <p>
              If you believe that your copyrighted work has been used in a way
              that constitutes copyright infringement, please contact us at
              copyright@ultimatepr.app with information regarding the alleged
              infringement.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Ultimate PR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4">
            <Link
              href="/"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
