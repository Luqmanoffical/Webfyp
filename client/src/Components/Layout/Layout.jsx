import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaBrain,
  FaCogs,
  FaBook,
  FaGlobe,
  FaShieldAlt,
  FaSync,
  FaEnvelope,
  FaGlobeAmericas,
  FaClock,
  FaReply,
  FaUsers,
  FaCode,
  FaGraduationCap,
  FaChartLine,
  FaDatabase,
  FaLock,
  FaUserShield,
  FaCookie,
  FaBalanceScale,
  FaFileContract,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  FaChevronDown,
  FaChevronUp,
  FaMobile,
  FaPlay,
  FaSort,
  FaGraduationCap as FaEducation,
  FaBug,
  FaKey,
  FaCode as FaTech,
} from "react-icons/fa";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";

// About Us Component
const AboutUs = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>
            About Us - Algorithms Simulator | Interactive Algorithm Learning
            Platform
          </title>
          <meta
            name="title"
            content="About Us - Algorithms Simulator | Interactive Algorithm Learning Platform"
          />
          <meta
            name="description"
            content="Learn about Algorithms Simulator - Your interactive platform for visualizing sorting algorithms. Transform complex computer science concepts into engaging learning experiences."
          />
          <meta
            name="keywords"
            content="sort simulator, sorting algorithms, algorithm visualization, computer science education, bubble sort, quick sort, merge sort, interactive learning"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <meta name="language" content="English" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#1e1b4b" />
          <link rel="canonical" href="https://sortsimulator.vercel.app/about" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sortsimulator.vercel.app/about"
          />
          <meta
            property="og:title"
            content="About Algorithms Simulator - Interactive Algorithm Learning"
          />
          <meta
            property="og:description"
            content="Discover how Algorithms Simulator makes learning sorting algorithms easy with real-time animations and interactive features."
          />
          <meta
            property="og:image"
            content="https://sortsimulator.vercel.app/assets/about-preview.jpg"
          />
          <meta property="og:site_name" content="Algorithms Simulator" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sortsimulator.vercel.app/about"
          />
          <meta
            property="twitter:title"
            content="About Algorithms Simulator - Interactive Algorithm Learning"
          />
          <meta
            property="twitter:description"
            content="Learn how Algorithms Simulator simplifies algorithm education through real-time simulations and engaging visuals."
          />
          <meta
            property="twitter:image"
            content="https://sortsimulator.vercel.app/assets/about-preview.jpg"
          />

          {/* Structured Data - JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Algorithms Simulator",
              description:
                "Learn about Algorithms Simulator, a platform dedicated to making sorting algorithms easy to understand through interactive visualizations.",
              url: "https://sortsimulator.vercel.app/about",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://sortsimulator.vercel.app/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Algorithms Simulator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sortsimulator.vercel.app/assets/logo.png",
                },
              },
              inLanguage: "en",
            })}
          </script>
        </Helmet>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-50 mb-6">
              About{" "}
              <span className="text-purple-400">Algorithms Simulator</span>
            </h1>
            <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
              Your Interactive Platform for Visualizing Sorting Algorithms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-n-6 rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <FaBrain className="text-4xl text-purple-400 mr-4" />
                <h2 className="text-3xl font-bold text-gray-50">Our Mission</h2>
              </div>
              <p className="text-white leading-relaxed mb-6">
                At Algorithms Simulator, we are committed to transforming
                complex computer science concepts into simple, engaging, and
                interactive learning experiences. Our platform provides
                real-time animated simulations of popular sorting algorithms.
              </p>
              <p className="text-white leading-relaxed">
                We believe in learning by doing and understanding by seeing. Our
                mission is to bridge the gap between theory and practical
                understanding in algorithm education.
              </p>
            </div>

            <div className="bg-n-6 rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <FaUsers className="text-4xl text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-50">
                  Who We Serve
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaGraduationCap className="text-blue-500 mr-3" />
                  <span className="text-white">
                    Students learning algorithms
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCode className="text-purple-500 mr-3" />
                  <span className="text-white">Programming enthusiasts</span>
                </div>
                <div className="flex items-center">
                  <FaChartLine className="text-orange-500 mr-3" />
                  <span className="text-white">Educators and instructors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-n-6 rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-50 mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaCogs className="text-5xl text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-50 mb-3">
                  Interactive Simulations
                </h3>
                <p className="text-white">
                  Real-time animated visualizations of Bubble Sort, Quick Sort,
                  Merge Sort, Insertion Sort, and Selection Sort
                </p>
              </div>
              <div className="text-center">
                <FaBook className="text-5xl text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-50 mb-3">
                  Educational Content
                </h3>
                <p className="text-white">
                  Detailed explanations of time complexity, use cases, and
                  algorithm behavior patterns
                </p>
              </div>
              <div className="text-center">
                <FaDatabase className="text-5xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-50 mb-3">
                  Custom Input
                </h3>
                <p className="text-white">
                  User input support with speed control, pause/resume
                  functionality
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-indigo-900 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg mb-6">
              We combine cutting-edge technologies (MERN Stack + PHP/MySQL) with
              a user-friendly interface that works on all modern web browsers
              and devices.
            </p>
            <p className="text-xl font-semibold">
              Start learning by doing. Start understanding by seeing. Welcome to
              the future of algorithm education.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

// Terms and Conditions Component
const TermsConditions = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>
            Terms and Conditions - Algorithms Simulator | Platform Usage
            Guidelines
          </title>
          <meta
            name="title"
            content="Terms and Conditions - Algorithms Simulator | Platform Usage Guidelines"
          />
          <meta
            name="description"
            content="View the official Terms and Conditions of Algorithms Simulator. Understand acceptable use, user responsibilities, intellectual property rights, and platform limitations."
          />
          <meta
            name="keywords"
            content="terms and conditions, sort simulator usage, platform policies, algorithm simulator terms, intellectual property, code of conduct, online tool legal terms"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <meta name="language" content="English" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#1e1b4b" />
          <link rel="canonical" href="https://sortsimulator.vercel.app/terms" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sortsimulator.vercel.app/terms"
          />
          <meta
            property="og:title"
            content="Terms and Conditions - Algorithms Simulator"
          />
          <meta
            property="og:description"
            content="Learn about Algorithms Simulator's usage guidelines, acceptable behavior, and legal policies. Protect your user rights and understand your responsibilities."
          />
          <meta
            property="og:image"
            content="https://sortsimulator.vercel.app/assets/terms-preview.jpg"
          />
          <meta property="og:site_name" content="Algorithms Simulator" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sortsimulator.vercel.app/terms"
          />
          <meta
            property="twitter:title"
            content="Terms and Conditions - Algorithms Simulator"
          />
          <meta
            property="twitter:description"
            content="Understand the legal terms and conditions for using Algorithms Simulator — a trusted educational tool for algorithm visualization."
          />
          <meta
            property="twitter:image"
            content="https://sortsimulator.vercel.app/assets/terms-preview.jpg"
          />

          {/* Structured Data - JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms and Conditions",
              description:
                "Algorithms Simulator's official Terms and Conditions outlining user rights, platform policies, acceptable use, and intellectual property protection.",
              url: "https://sortsimulator.vercel.app/terms",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://sortsimulator.vercel.app/terms",
              },
              publisher: {
                "@type": "Organization",
                name: "Algorithms Simulator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sortsimulator.vercel.app/assets/logo.png",
                },
              },
              inLanguage: "en",
            })}
          </script>
        </Helmet>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <FaBalanceScale className="text-6xl text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-50 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-white">
              Algorithms Simulator Platform Usage Guidelines
            </p>
          </div>

          <div className="bg-n-6 rounded-2xl shadow-xl p-8 space-y-8">
            <div className="border-l-4 border-purple-400 pl-6">
              <p className="text-white mb-6">
                By accessing and using the Algorithms Simulator platform
                (accessible via sortsimulator.vercel.app or any associated
                domains), you agree to the following terms and conditions.
                Please read them carefully before using our service.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaCogs className="text-2xl text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    1. Use of the Platform
                  </h2>
                </div>
                <p className="text-white mb-4">
                  Algorithms Simulator is an educational tool intended for
                  personal, academic, and non-commercial use.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">
                      ✅ Users May:
                    </h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Visualize sorting algorithms</li>
                      <li>Input their own data arrays</li>
                      <li>Access educational content</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">
                      ❌ Users May Not:
                    </h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Unauthorized commercial activities</li>
                      <li>Disruption of service or tampering</li>
                      <li>Sharing offensive content</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaFileContract className="text-2xl text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    2. Intellectual Property
                  </h2>
                </div>
                <p className="text-white">
                  All content, graphics, animations, and source code are the
                  intellectual property of Algorithms Simulator and its
                  developers. Unauthorized copying or distribution is
                  prohibited.
                </p>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-2xl text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    3. User Accounts
                  </h2>
                </div>
                <p className="text-white mb-3">
                  If the platform provides account registration:
                </p>
                <ul className="list-disc list-inside text-white space-y-1">
                  <li>Keep login credentials secure</li>
                  <li>Do not impersonate others</li>
                  <li>You are responsible for activity on your account</li>
                </ul>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    4. Disclaimer
                  </h2>
                </div>
                <p className="text-white">
                  This tool is for educational purposes only. We do not
                  guarantee that the animations or algorithm descriptions are
                  free from errors, although we strive for accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

// Privacy Policy Component
const PrivacyPolicy = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>
            Privacy Policy - Algorithms Simulator | Data Privacy & Protection
            Standards
          </title>
          <meta
            name="title"
            content="Privacy Policy - Algorithms Simulator | Data Privacy & Protection Standards"
          />
          <meta
            name="description"
            content="Review the Privacy Policy of Algorithms Simulator to understand how your data is collected, used, and protected. We are committed to data privacy and transparency."
          />
          <meta
            name="keywords"
            content="privacy policy, user privacy, data protection, cookies, encryption, sort simulator security, data safety, personal information policy"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <meta name="language" content="English" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#1e1b4b" />
          <link
            rel="canonical"
            href="https://sortsimulator.vercel.app/privacy"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sortsimulator.vercel.app/privacy"
          />
          <meta
            property="og:title"
            content="Privacy Policy - Algorithms Simulator"
          />
          <meta
            property="og:description"
            content="Learn how Algorithms Simulator protects your privacy, secures your data, and ensures transparency with cookies and analytics policies."
          />
          <meta
            property="og:image"
            content="https://sortsimulator.vercel.app/assets/privacy-policy-preview.jpg"
          />
          <meta property="og:site_name" content="Algorithms Simulator" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sortsimulator.vercel.app/privacy"
          />
          <meta
            property="twitter:title"
            content="Privacy Policy - Algorithms Simulator"
          />
          <meta
            property="twitter:description"
            content="Understand how Algorithms Simulator collects, stores, and protects your personal data in compliance with privacy best practices."
          />
          <meta
            property="twitter:image"
            content="https://sortsimulator.vercel.app/assets/privacy-policy-preview.jpg"
          />

          {/* Structured Data - JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              description:
                "Official privacy policy of Algorithms Simulator detailing how user information is collected, used, stored, and protected through secure technologies.",
              url: "https://sortsimulator.vercel.app/privacy",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://sortsimulator.vercel.app/privacy",
              },
              publisher: {
                "@type": "Organization",
                name: "Algorithms Simulator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sortsimulator.vercel.app/assets/logo.png",
                },
              },
              inLanguage: "en",
            })}
          </script>
        </Helmet>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <FaUserShield className="text-6xl text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-50 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white">How We Protect Your Data</p>
          </div>

          <div className="bg-n-6 rounded-2xl shadow-xl p-8">
            <div className="border-l-4 border-purple-400 pl-6 mb-8">
              <p className="text-white text-lg">
                At Algorithms Simulator, we take your privacy seriously and are
                committed to safeguarding the information you provide to us.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaDatabase className="text-2xl text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    1. What We Collect
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaUsers className="text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-50">
                        Account Information:
                      </h3>
                      <p className="text-white">
                        If you register, we collect name, email, and password
                        (encrypted).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCogs className="text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-50">
                        User Input:
                      </h3>
                      <p className="text-white">
                        Arrays and preferences used in simulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaChartLine className="text-purple-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-50">
                        Analytics Data:
                      </h3>
                      <p className="text-white">
                        Usage statistics to improve performance and usability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaCogs className="text-2xl text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    2. How We Use Data
                  </h2>
                </div>
                <ul className="list-disc list-inside text-white space-y-2">
                  <li>To personalize your simulation experience</li>
                  <li>To store your simulation history</li>
                  <li>To analyze usage trends for future development</li>
                  <li className="font-semibold text-green-700">
                    We do not sell or share your data with third parties
                  </li>
                </ul>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaCookie className="text-2xl text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    3. Cookies
                  </h2>
                </div>
                <p className="text-white">
                  We use cookies to enhance user experience, remember your
                  preferences, and collect basic analytics.
                </p>
              </div>

              <div className="bg-n-5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaLock className="text-2xl text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-50">
                    4. Security
                  </h2>
                </div>
                <p className="text-white">
                  All data is stored in a secure, encrypted MySQL database and
                  protected through industry-standard security practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

// Contact Us Component
const ContactUs = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>
            Contact Us - Algorithms Simulator | Support, Feedback & Help
          </title>
          <meta
            name="title"
            content="Contact Us - Algorithms Simulator | Support, Feedback & Help"
          />
          <meta
            name="description"
            content="Need assistance with sorting algorithms, simulations, or educational collaborations? Contact Algorithms Simulator for expert help, technical support, or feedback."
          />
          <meta
            name="keywords"
            content="contact sort simulator, contact us, algorithm simulator support, feedback form, technical assistance, sort simulator help, sorting visualization help, react vercel support"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <meta name="language" content="English" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#4f46e5" />
          <link
            rel="canonical"
            href="https://sortsimulator.vercel.app/contact"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sortsimulator.vercel.app/contact"
          />
          <meta
            property="og:title"
            content="Contact Algorithms Simulator - Support & Help"
          />
          <meta
            property="og:description"
            content="Reach out to Algorithms Simulator for questions, algorithm help, technical issues, or feedback. Our team is ready to assist you."
          />
          <meta
            property="og:image"
            content="https://sortsimulator.vercel.app/assets/contact-preview.jpg"
          />
          <meta property="og:site_name" content="Algorithms Simulator" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sortsimulator.vercel.app/contact"
          />
          <meta
            property="twitter:title"
            content="Contact Algorithms Simulator - Technical Help & Feedback"
          />
          <meta
            property="twitter:description"
            content="Have questions about sorting algorithms or simulations? Get in touch with the Algorithms Simulator team for personalized support."
          />
          <meta
            property="twitter:image"
            content="https://sortsimulator.vercel.app/assets/contact-preview.jpg"
          />

          {/* Structured Data - JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Us",
              description:
                "Algorithms Simulator's official contact page for questions, support, educational partnerships, or feedback on algorithm visualizations.",
              url: "https://sortsimulator.vercel.app/contact",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://sortsimulator.vercel.app/contact",
              },
              publisher: {
                "@type": "Organization",
                name: "Algorithms Simulator",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sortsimulator.vercel.app/assets/logo.png",
                },
              },
              inLanguage: "en",
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@sortsimulator.com",
                contactType: "Technical Support",
                availableLanguage: ["English", "Urdu"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
            })}
          </script>
        </Helmet>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <FaEnvelope className="text-6xl text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-50 mb-4">Contact Us</h1>
            <p className="text-lg text-white">We're Here to Help</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-n-6 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-50 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-50">Email</h3>
                    <p className="text-white">support@sortsimulator.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaGlobeAmericas className="text-2xl text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-50">Website</h3>
                    <p className="text-white">www.sortsimulator.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-2xl text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-50">Availability</h3>
                    <p className="text-white">
                      Monday – Friday, 9:00 AM to 6:00 PM (PKT)
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaReply className="text-2xl text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-50">
                      Response Time
                    </h3>
                    <p className="text-white">Within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-n-6 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-50 mb-6">
                What Can We Help You With?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-n-5 rounded-lg">
                  <FaQuestionCircle className="text-blue-600 mr-3" />
                  <span className="text-white">
                    Questions about sorting algorithms
                  </span>
                </div>
                <div className="flex items-center p-3 bg-n-5 rounded-lg">
                  <FaCogs className="text-green-600 mr-3" />
                  <span className="text-white">Technical assistance</span>
                </div>
                <div className="flex items-center p-3 bg-n-5 rounded-lg">
                  <FaChartLine className="text-purple-600 mr-3" />
                  <span className="text-white">Feedback and suggestions</span>
                </div>
                <div className="flex items-center p-3 bg-n-5 rounded-lg">
                  <FaGraduationCap className="text-orange-600 mr-3" />
                  <span className="text-white">Educational partnerships</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
            <p className="text-lg">
              Your suggestions and feedback help us make Algorithms Simulator
              even better for the entire learning community!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      icon: FaQuestionCircle,
      color: "text-blue-600",
      question: "What is a sorting algorithm simulator?",
      answer:
        "A sorting algorithm simulator is an interactive online tool that visually demonstrates how different sorting algorithms work. Users can input data and watch real-time animations that explain the step-by-step process of sorting using methods like Bubble Sort, Quick Sort, Merge Sort, and more.",
    },
    {
      icon: FaBrain,
      color: "text-purple-600",
      question: "Why should I use a sorting algorithm visualizer?",
      answer:
        "A visualizer helps students and programmers understand sorting algorithms more effectively. Instead of just reading code, you can see how elements are compared, swapped, and moved in real time, making learning more intuitive and engaging.",
    },
    {
      icon: FaSort,
      color: "text-green-600",
      question: "Which sorting algorithms are available on this simulator?",
      answer:
        "Our simulator currently supports the following sorting algorithms: Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, and Selection Sort. More algorithms like Heap Sort and Radix Sort will be added soon based on user feedback.",
    },
    {
      icon: FaPlay,
      color: "text-orange-600",
      question: "Is the sorting simulator free to use?",
      answer:
        "Yes, our sorting algorithm simulator is completely free for educational and personal use. No subscription or payment is required.",
    },
    {
      icon: FaCode,
      color: "text-red-600",
      question: "Can I input my own data in the simulator?",
      answer:
        "Absolutely! You can enter your own custom arrays to see how different sorting algorithms handle various inputs. This feature helps you test specific scenarios and compare results.",
    },
    {
      icon: FaMobile,
      color: "text-teal-600",
      question: "Does the simulator work on mobile devices?",
      answer:
        "Yes, the simulator is fully responsive and works smoothly on all modern devices and browsers including Chrome, Firefox, Edge, Safari, Android, and iOS.",
    },
    {
      icon: FaChartLine,
      color: "text-indigo-600",
      question: "What is the time complexity of each algorithm?",
      answer:
        "Each algorithm comes with an explanation of its best, average, and worst-case time complexity. For example: Bubble Sort: O(n²), Quick Sort: O(n log n) on average, Merge Sort: O(n log n). This helps users understand the performance of each algorithm in different situations.",
    },
    {
      icon: FaEducation,
      color: "text-pink-600",
      question: "Is this platform suitable for beginners?",
      answer:
        "Yes! Our simulator is designed for beginners, students, and educators. It features step-by-step animations, simple controls, and informative descriptions that make learning easy and effective.",
    },
    {
      icon: FaUsers,
      color: "text-yellow-600",
      question: "Do I need to register to use the simulator?",
      answer:
        "No registration is required for basic use. However, creating an account allows you to save simulation history, set preferences, and enjoy a personalized experience.",
    },
    {
      icon: FaGraduationCap,
      color: "text-blue-500",
      question: "Can I use this tool to teach my students?",
      answer:
        "Yes! Educators are encouraged to use our simulator in the classroom or during online tutorials. It's a great resource for teaching algorithm fundamentals with interactive visuals.",
    },
    {
      icon: FaBug,
      color: "text-red-500",
      question: "How can I report a bug or suggest a new feature?",
      answer:
        "You can reach us via our Contact Us page or email us directly at support@sortsimulator.com. We appreciate all feedback and aim to improve continuously based on user suggestions.",
    },
    {
      icon: FaSync,
      color: "text-green-500",
      question: "Will you add more sorting algorithms in the future?",
      answer:
        "Yes, we plan to expand our simulator with advanced algorithms like Heap Sort, Counting Sort, and Radix Sort. Stay tuned for updates!",
    },
    {
      icon: FaCode,
      color: "text-purple-500",
      question: "Is the simulator open source?",
      answer:
        "Currently, the simulator is not open source. However, we may consider releasing parts of the project in the future to contribute to the educational community.",
    },
    {
      icon: FaTech,
      color: "text-teal-500",
      question: "What technologies are used in this simulator?",
      answer:
        "Our platform is built using React.js, PHP, and MySQL, ensuring real-time animations, responsive design, and secure data handling. We combine front-end interactivity with a powerful back-end to deliver the best user experience.",
    },
    {
      icon: FaLock,
      color: " text-white",
      question: "Is my data secure on this platform?",
      answer:
        "Yes, we prioritize your privacy and data security. All data is stored securely and used only to improve your experience. We do not share or sell your information to any third party.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          <title>
            Frequently Asked Questions (FAQ) - Algorithms Simulator | Sorting
            Algorithm Visualizer Help
          </title>
          <meta
            name="description"
            content="Explore frequently asked questions about Algorithms Simulator. Learn how our free sorting algorithm visualizer works with Bubble Sort, Quick Sort, Merge Sort, and more. Mobile support, input options, and time complexity guidance included."
          />
          <meta
            name="keywords"
            content="sort simulator FAQ, sorting algorithm questions, bubble sort visualizer, quick sort simulator, merge sort online, educational algorithm tool, interactive sorting visualizer, learn sorting visually, student programming help"
          />
          <meta
            property="og:title"
            content="Frequently Asked Questions - Algorithms Simulator Help"
          />
          <meta
            property="og:description"
            content="Get clear answers about Algorithms Simulator's features, sorting algorithm support, mobile compatibility, and educational benefits."
          />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <link rel="canonical" href="https://sortsimulator.vercel.app/faq" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            })}
          </script>
        </Helmet>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <FaQuestionCircle className="text-6xl text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-50 mb-6">
              Frequently Asked{" "}
              <span className="text-purple-400">Questions</span>
            </h1>
            <p className="text-xl  text-white max-w-3xl mx-auto">
              Everything you need to know about Algorithms Simulator and sorting
              algorithm visualization
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-n-6 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-n-5 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <faq.icon
                      className={`text-2xl ${faq.color} mr-4 flex-shrink-0`}
                    />
                    <h3 className="text-lg font-semibold text-gray-50 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="pl-10">
                      <p className=" text-white leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">
              Can't find the answer you're looking for? Our support team is here
              to help!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <FaEnvelope className="text-2xl" />
              <span className="text-xl font-semibold">
                support@sortsimulator.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const features = [
    {
      icon: FaBrain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      title: "Visual Learning Made Easy",
      description:
        "Our simulator brings abstract sorting algorithms to life with real-time animated visualizations, making them easier to understand than static code or textbook examples.",
    },
    {
      icon: FaCogs,
      color: "text-green-600",
      bgColor: "bg-green-50",
      title: "Interactive and User-Friendly",
      description:
        "Control the speed, pause the animation, or reset anytime. Input your own data to see how different algorithms handle real scenarios.",
    },
    {
      icon: FaBook,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      title: "Educational Depth",
      description:
        "Each algorithm comes with detailed descriptions, time complexity analysis, and real-world applications perfect for students and instructors alike.",
    },
    {
      icon: FaGlobe,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      title: "Accessible Everywhere",
      description:
        "Fully responsive and compatible with all modern browsers, our tool works seamlessly on mobile, tablet, and desktop devices.",
    },
    {
      icon: FaShieldAlt,
      color: "text-red-600",
      bgColor: "bg-red-50",
      title: "Secure and Personalized",
      description:
        "With user accounts powered by a secure PHP/MySQL backend, you can store history, track your progress, and enjoy a custom learning experience.",
    },
    {
      icon: FaSync,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      title: "Always Evolving",
      description:
        "We're continuously updating the simulator to include more sorting techniques, data structure visualizations, and AI-based enhancements based on user feedback.",
    },
  ];

  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
      <Navbar />
      <div className="min-h-screen mt-6  text white">
        <Helmet>
          <title>
            Why Choose Algorithms Simulator | Interactive Sorting Algorithm
            Visualizer
          </title>
          <meta
            name="description"
            content="Discover why Algorithms Simulator is the best interactive platform to learn sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort through visual animations and hands-on features."
          />
          <meta
            name="keywords"
            content="algorithm visualizer, sort simulator, learn sorting online, best sorting algorithm tool, bubble sort visualizer, quick sort demo, educational coding tools, interactive algorithm learning"
          />
          <meta property="og:title" content="Why Choose Algorithms Simulator" />
          <meta
            property="og:description"
            content="Algorithms Simulator makes algorithm learning visual, interactive, and beginner-friendly. Learn and compare Bubble, Merge, Quick Sort and more."
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Algorithms Simulator Team" />
          <link
            rel="canonical"
            href="https://sortsimulator.vercel.app/why-choose-us"
          />
        </Helmet>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-50 mb-6">
              Why Choose{" "}
              <span className="text-purple-400">Algorithms Simulator</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              For Learning Sorting Algorithms the Modern Way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-n-6 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${feature.bgColor} rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto`}
                >
                  <feature.icon className={`text-3xl ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-50 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-white leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students, developers, and educators who trust
              Algorithms Simulator for their algorithm learning journey.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-indigo-200">Algorithms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-indigo-200">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-indigo-200">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export { AboutUs, TermsConditions, PrivacyPolicy, ContactUs, WhyChooseUs, FAQ };
