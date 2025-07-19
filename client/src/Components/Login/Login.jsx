import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import signinimg from "../../assets/signinimg.png";
import { Helmet } from "react-helmet";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: data.email,
          Password: data.password,
        }),
      });

      const result = await response.json();
      console.log("This is the response i am getting", result);
      if (response.ok) {
        console.log("Login successful:", result);

        toast.success("Login Successfull ");
        console.log("This is the Email", result.Email);
        localStorage.setItem("Email", result.Email);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.error("Login failed:", result);
        toast.error(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Login to Algorithms Simulator | Secure Account Access</title>
        <meta
          name="title"
          content="Login to Algorithms Simulator | Secure Account Access"
        />
        <meta
          name="description"
          content="Sign in to your Algorithms Simulator account to track your sorting algorithm simulations, access personalized tools, and enhance your learning experience."
        />
        <meta
          name="keywords"
          content="login, sign in, algorithm simulator, sorting visualization login, educational tool login, algorithms, quicksort login, bubble sort login, insertion sort login"
        />
        <meta name="author" content="Algorithms Simulator Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://algorithms-simulator.vercel.app/login"
        />
        <meta
          property="og:title"
          content="Login to Algorithms Simulator | Secure Account Access"
        />
        <meta
          property="og:description"
          content="Sign in to continue exploring animated sorting algorithms, user analytics, and personalized learning features."
        />
        <meta
          property="og:image"
          content="https://algorithms-simulator.vercel.app/assets/algorithms-simulator-preview.jpg"
        />
        <meta property="og:site_name" content="Algorithms Simulator" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://algorithms-simulator.vercel.app/login"
        />
        <meta
          property="twitter:title"
          content="Login to Algorithms Simulator | Secure Account Access"
        />
        <meta
          property="twitter:description"
          content="Access your Algorithms Simulator account to experience real-time sorting animations and interactive algorithm visualizations."
        />
        <meta
          property="twitter:image"
          content="https://algorithms-simulator.vercel.app/assets/algorithms-simulator-preview.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://algorithms-simulator.vercel.app/login"
        />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Login - Algorithms Simulator",
            description:
              "Access your Algorithms Simulator account to visualize and learn sorting algorithms interactively.",
            url: "https://algorithms-simulator.vercel.app/login",
            isPartOf: {
              "@type": "WebSite",
              name: "Algorithms Simulator",
              url: "https://algorithms-simulator.vercel.app",
            },
            inLanguage: "en",
            potentialAction: {
              "@type": "ViewAction",
              target: "https://algorithms-simulator.vercel.app/login",
              name: "Login Page",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <div className="min-h-screen font-poppins flex flex-col lg:flex-row bg-[#0000003a]">
        {/* Left Section - Graphic and Welcome Text */}
        <div
          className=" mt-7 bg-[#ffffff0e] flex-1 flex flex-col items-center text-white p-6 h-screen neon-border"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#566fdf] to-[purple] tracking-wider mt-20 text-center drop-shadow-lg">
            Welcome
          </h1>
          <p className="text-sm pt-2  sm:text-[20px]">Algorithms Simulator </p>

          <img src={signinimg} className="w-[500px]" />
        </div>

        {/* Right Section - Sign In Form */}
        <div className="flex-1 flex justify-center items-center p-6 h-screen neon-border">
          <div className="  p-8 w-[500px] h-[600px] mt-24 rounded-2xl   transform transition-transform ">
            <h1 className="mt-10  text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#566fdf] to-[purple]">
              Sign In
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  className="block text-[#ffffffdc] text-sm font-semibold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center border border-[#ffffffdc] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaEnvelope className="text-[#ffffffdc] mr-2" />
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`flex-grow appearance-none outline-none bg-transparent text-[#ffffffdc] placeholder-gray-400 focus:ring-0 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  className="block text-[#ffffffdc] text-sm font-semibold mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center border border-[#ffffffdc] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaLock className="text-[#ffffffdc] mr-2" />
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`flex-grow appearance-none outline-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...register("rememberMe")}
                    className="mr-2 text-[#ffffffdc] focus:ring-[#ffffffdc] rounded"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <div></div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mb-4">
                <button className=" w-28 text-white font-semibold py-2 bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded">
                  <span>Sign In</span>
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-[#ffffffdc]">
              <p>
                No Account?{" "}
                <span className="text-[#ffffffdc] font-semibold">
                  <Link to="/signup">Register Here!</Link>
                </span>
              </p>
              <p className="text-sm mt-1 text-[#ffffffdc]">
                Registration takes less than a minute but gives you access to
                your free online account!
              </p>
              <Link
                to="/signup"
                className="inline-block mt-2 text-[#ffffffdc] hover:text-[#aab0b1]    font-bold transition-colors duration-300"
              >
                Register <FaUserCircle className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
