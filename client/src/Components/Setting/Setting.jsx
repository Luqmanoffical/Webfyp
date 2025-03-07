import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Navbar from "../Header/Header"; // Assuming you have Navbar component
import Footer from "../Footer/Footer"; // Assuming you have Footer component
import setting from "../../assets/setting.png";
const Setting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Password changed successfully");
  };

  const newPassword = watch("newPassword");

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#0000003a]">
        {/* Left Section - Message */}
        <div className="mt-7 bg-[#ffffff0e] flex-1 flex flex-col items-center text-white p-6 h-screen">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#566fdf] to-[purple] tracking-wider mt-20 text-center drop-shadow-lg">
            Account Setting
          </h1>
          <p className="text-sm pt-2 sm:text-[20px] text-center">
            Update your password to secure your account.
          </p>

          <img src={setting} className="w-[500px]" />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex justify-center items-center p-6 h-screen">
          <div className="p-8 w-[500px] h-[600px] mt-24 rounded-2xl transform transition-transform  shadow-lg">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#566fdf] to-[purple] tracking-wider mt-10 text-center drop-shadow-lg">
              Change Your Password
            </h1>
            <p className="text-sm pt-2 pb-8 sm:text-[20px] text-center">
              Update your password to secure your account.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Old Password */}
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-semibold mb-1"
                  htmlFor="oldPassword"
                >
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    id="oldPassword"
                    {...register("oldPassword", {
                      required: "Old password is required",
                    })}
                    className={`w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${
                      errors.oldPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your old password"
                  />
                  <span
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.oldPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.oldPassword.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-semibold mb-1"
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className={`w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${
                      errors.newPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your new password"
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-semibold mb-1"
                  htmlFor="confirmPassword"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Please confirm your new password",
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                    })}
                    className={`w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Confirm your new password"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3  text-white focus:outline-none bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Change Password
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Setting;
