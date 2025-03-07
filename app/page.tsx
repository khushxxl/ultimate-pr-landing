"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
import Mockup from "@/assets/mockup.png";
import DownloadNow from "@/assets/download-now.svg";
import widgetMockup from "@/assets/widget-mockup.png";

function HomePage() {
  const mockups = [
    "https://i.ibb.co/jP9420BV/Shots-Mockups-48.png",
    "https://i.ibb.co/q34ZZpjf/Shots-Mockups-50.png",
    "https://i.ibb.co/wZ2GGqPF/Shots-Mockups-49.png",
  ];
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-12 md:pt-24 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-7xl font-bold max-w-4xl leading-tight">
          Track & Analyse Your Gym PRs <br className="hidden md:block" /> fast &
          simple
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex justify-center md:justify-start"
        >
          <a href="#download" className="transition-transform hover:scale-105">
            <Image
              src={DownloadNow}
              alt="Download on the App Store"
              width={140}
              height={140}
              className="cursor-pointer"
            />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-row mt-8 md:mt-0"
      >
        <Image
          src={Mockup}
          alt="App mockup"
          width={800}
          height={800}
          className="w-full max-w-[600px] md:max-w-[800px]"
        />
      </motion.div>

      {/* Widget Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-0"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
              Track Your PRs Right From Your Home Screen
            </h2>
            <p className="text-zinc-400 mb-6 text-center md:text-left">
              With our custom iOS widgets, you can view your progress without
              even opening the app. Keep your most important PRs visible at all
              times and stay motivated throughout your day.
            </p>
            <ul className="space-y-3 max-w-md mx-auto md:mx-0">
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm md:text-base">
                  Multiple widget sizes available
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm md:text-base">
                  Customizable display options
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-300 text-sm md:text-base">
                  Real-time PR updates
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative mx-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src={widgetMockup}
                  alt="iOS Widget Mockup"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-zinc-800/50 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-700 hidden md:block">
                <p className="text-xs text-zinc-300">
                  <span className="font-bold">Pro tip:</span> Add widgets to
                  your home screen
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black border border-zinc-800 p-6 md:p-8 rounded-xl hover:border-zinc-700 transition-all"
          >
            <div className="h-12 w-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Track Your Progress</h3>
            <p className="text-zinc-500">
              Easily log and monitor your personal records for every exercise.
              See your improvement over time with intuitive charts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-black border border-zinc-800 p-6 md:p-8 rounded-xl hover:border-zinc-700 transition-all"
          >
            <div className="h-12 w-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Workout Templates</h3>
            <p className="text-zinc-500">
              Create and save your favorite workout routines. Quick access to
              your templates makes planning your gym sessions effortless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-black border border-zinc-800 p-6 md:p-8 rounded-xl hover:border-zinc-700 transition-all"
          >
            <div className="h-12 w-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
            <p className="text-zinc-500">
              Get detailed insights about your training performance. Identify
              strengths, weaknesses, and optimize your workout strategy.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        id="download"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto py-12 px-4 md:px-0 text-center"
      >
        <div className="flex flex-col items-center mb-8">
          <Image
            src={Logo}
            alt="Ultimate PR Logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5">
            Download Now
          </h2>
        </div>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Start tracking your fitness journey today. Available on iOS.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#" className="inline-block">
            <Image
              src={DownloadNow}
              alt="Download on the App Store"
              width={180}
              height={180}
              className="cursor-pointer"
            />
          </a>
        </motion.div>
      </motion.div>
      <footer className="w-full border-t border-zinc-800 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} Ultimate PR. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/copyright"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Copyright
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
