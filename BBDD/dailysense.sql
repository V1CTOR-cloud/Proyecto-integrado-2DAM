-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2022 a las 19:55:23
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dailysense`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assistant`
--

CREATE TABLE `assistant` (
  `IdAssistant` int(4) NOT NULL,
  `User` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `assistant`
--

INSERT INTO `assistant` (`IdAssistant`, `User`, `Password`, `Gender`, `Email`) VALUES
(2, 'admin', 'admin', 'male', 'admin@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attributes`
--

CREATE TABLE `attributes` (
  `IdAttribute` int(4) NOT NULL,
  `Type` int(1) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Description` varchar(400) DEFAULT NULL,
  `Dependents` int(4) NOT NULL,
  `Date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependents`
--

CREATE TABLE `dependents` (
  `IdDependents` int(4) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `LastName` varchar(90) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Age` int(3) NOT NULL,
  `FamilyContact` int(20) DEFAULT NULL,
  `Diseases` varchar(200) DEFAULT NULL,
  `Allergies` varchar(200) DEFAULT NULL,
  `Assistant` int(4) NOT NULL,
  `DependencyLevel` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assistant`
--
ALTER TABLE `assistant`
  ADD PRIMARY KEY (`IdAssistant`);

--
-- Indices de la tabla `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`IdAttribute`),
  ADD KEY `Dependents` (`Dependents`);

--
-- Indices de la tabla `dependents`
--
ALTER TABLE `dependents`
  ADD PRIMARY KEY (`IdDependents`),
  ADD KEY `Assistant` (`Assistant`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `assistant`
--
ALTER TABLE `assistant`
  MODIFY `IdAssistant` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `attributes`
--
ALTER TABLE `attributes`
  MODIFY `IdAttribute` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dependents`
--
ALTER TABLE `dependents`
  MODIFY `IdDependents` int(4) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `attributes`
--
ALTER TABLE `attributes`
  ADD CONSTRAINT `attributes_dependents` FOREIGN KEY (`Dependents`) REFERENCES `dependents` (`IdDependents`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `dependents`
--
ALTER TABLE `dependents`
  ADD CONSTRAINT `Dependents_Assistant` FOREIGN KEY (`Assistant`) REFERENCES `assistant` (`IdAssistant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
