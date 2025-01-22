CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pass` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidoPaterno` varchar(255) NOT NULL,
  `apellidoMaterno` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `rol` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);