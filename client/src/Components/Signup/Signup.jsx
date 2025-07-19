import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import { Helmet } from "react-helmet";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import LoginAnimation from "../../assets/LoginAnimation.json";
import "./Styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);

    try {
      const response = await fetch("http://localhost:3000/Register", {
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

      if (response.ok) {
        toast.success("Registration successful! ");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="overflow-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Free Signup | Create Account - Sorting Algorithm Simulator
        </title>
        <meta
          name="title"
          content="Free Signup | Create Account - Sorting Algorithm Simulator"
        />
        <meta
          name="description"
          content="Sign up for free to access the best web-based animated sorting algorithm simulator. Visualize Bubble Sort, Quick Sort, Merge Sort, and more with real-time animations."
        />
        <meta
          name="keywords"
          content="signup sorting simulator, sorting algorithm visualizer, learn bubble sort online, quick sort visualization, merge sort step by step, sorting animation tool, react sorting simulator, register algorithm simulator"
        />
        <meta name="author" content="Algorithms Simulator Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.vercel.app/signup" />
        <meta
          property="og:title"
          content="Free Signup | Create Account - Sorting Algorithm Simulator"
        />
        <meta
          property="og:description"
          content="Create your free account to explore animated sorting algorithm simulations. Learn sorting visually with our educational platform."
        />
        <meta
          property="og:image"
          content="https://yoursite.vercel.app/og-image.jpg"
        />
        <meta property="og:site_name" content="Algorithms Simulator" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://yoursite.vercel.app/signup"
        />
        <meta
          property="twitter:title"
          content="Free Signup | Sorting Algorithm Simulator"
        />
        <meta
          property="twitter:description"
          content="Join our platform to visually understand Bubble Sort, Quick Sort, and more. Free, interactive, and educational."
        />
        <meta
          property="twitter:image"
          content="https://yoursite.vercel.app/og-image.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yoursite.vercel.app/signup" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Algorithms Simulator",
            description:
              "An interactive platform to learn sorting algorithms visually. Register to simulate and understand Bubble Sort, Quick Sort, Merge Sort, and more.",
            url: "https://yoursite.vercel.app/signup",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "Algorithms Simulator Team",
            },
            keywords: [
              "sorting algorithm simulator",
              "sorting visualizer",
              "bubble sort animation",
              "quick sort online tool",
              "merge sort visualizer",
              "free react simulator",
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <div className="mt-16 min-h-screen bg-transparent flex items-center justify-center py-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl bg-transparent rounded-3xl shadow-[10px] overflow-hidden neon-border-purple">
          <div className="flex w-full md:w-1/2 bg-[#ffffff0e] p-6 md:p-12 flex-col justify-center items-center">
            <Player
              autoplay
              loop
              src={LoginAnimation}
              style={{ height: "220px", width: "220px" }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">
              Registered Now
            </h2>
            <p className="text-white mt-4 text-center leading-relaxed">
              Algorithms Simulator{" "}
            </p>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2ec0] mb-2 text-center">
              Register Your Free Account!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2ec2] mb-8 text-center">
              Create an Account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters",
                      },
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-gray-700"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {errors.terms && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.terms.message}
                </p>
              )}
              <p className="text-sm text-gray-700">
                Already have any account{" "}
                <Link
                  className=" font-bold text-purple-600 hover:underline"
                  to="/signin"
                >
                  {" "}
                  Login Now
                </Link>{" "}
              </p>
              <div className="flex justify-center">
                <button className="w-40 text-white font-semibold py-3 bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded ">
                  <span> Sign Up</span>
                </button>
              </div>
            </form>
          </div>

          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
