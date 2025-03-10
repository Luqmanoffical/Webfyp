-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2025 at 04:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webfyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Email` varchar(500) NOT NULL DEFAULT '',
  `Password` varchar(500) NOT NULL DEFAULT '',
  `Created_At` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Email`, `Password`, `Created_At`) VALUES
(1, 'ahmadali43a5@gmail.com', '$2b$10$Klvs66J0cGwlqo1oXNYdYelUfaAWJzN8kW.jlqq8VPOv1Czen0peO', NULL),
(2, 'Akram123@gmail.com', '$2b$10$v.PqSdOsqUY/xyGQ9CIKo.pk3CObVNUIPPyXJx5AqlItlYyiSCWoe', NULL),
(3, 'Ahmad123@gmail.com', '$2b$10$b8fV1TJf6Y8dcajxzrAPoOSQdhoTZ.6dYUSK/101mKAr/7ZleZLCK', NULL),
(4, 'Ahma23@gmail.com', '$2b$10$9rZXZ2PEDp.XQeiWxoOWzuCgJc.vdVd6CdIipHQKJ2Ae9jqID1lrO', NULL),
(5, 'ahmaduiu123@gmail.com', '$2b$10$k1xKrv1UbDpqXooyN4g1.eQo0ilfMKTFMiej6V8dpxxIgIQaN6cQG', NULL),
(6, 'Ajmal123@gmail.com', '$2b$10$n8ykGyMtdJSeKUZQbEU3ouEGzS5zs8.UkDuT5lhw.lyH4A0r.lRXW', NULL),
(7, 'ahasdf@gmail.com', '$2b$10$0ndyR7S6N8YoO0E.hyDmpO63lW9tGZWUxHSf8yX51mgia/ygiDK3y', NULL),
(8, 'check123@gmail.com', '$2b$10$v8se0ClEld6ptn.GRHoLxetXO.LEBpHI2MJTor9VigU/vdHOHPl.G', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
