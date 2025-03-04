"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Ultimate PR Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
            <h1 className="text-2xl font-bold ml-3">Ultimate PR</h1>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              At Ultimate PR, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you use our
              mobile application.
            </p>
            <p>
              By using the Ultimate PR app, you agree to the collection and use
              of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal information you provide to us when creating an account
                (name, email address)
              </li>
              <li>Workout data and personal records you input into the app</li>
              <li>Usage data and analytics to improve our service</li>
              <li>
                Device information such as device type, operating system, and
                app version
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our app</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our service
              </li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Data Security
            </h2>
            <p>
              The security of your data is important to us. We strive to use
              commercially acceptable means to protect your personal
              information, but we cannot guarantee its absolute security. Your
              data is stored securely in the cloud and is only accessible by you
              through your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>
            <p>
              We may employ third-party companies and individuals to facilitate
              our service, provide the service on our behalf, perform
              service-related tasks, or assist us in analyzing how our service
              is used. These third parties have access to your personal
              information only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Children's Privacy
            </h2>
            <p>
              Our service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from
              children under 13. If we discover that a child under 13 has
              provided us with personal information, we immediately delete this
              from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "effective date" at the top of this Privacy
              Policy. You are advised to review this Privacy Policy periodically
              for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@ultimatepr.app
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
              href="/copyright"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Terms of Service & Copyright
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
