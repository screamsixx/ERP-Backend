CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido_usuario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email_usuario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono_usuario` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contrasena_usuario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_nacimiento_usuario` date DEFAULT NULL,
  `genero_usuario` varchar(1) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `direccion_usuario` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `ciudad_usuario` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `estado_usuario` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `codigo_postal_usuario` varchar(20) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fk_tabla_rol` int DEFAULT NULL,
  `fecha_registro_usuario` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_tabla_estatus` int DEFAULT NULL,
  `fk_tabla_catalogo_negocios` int DEFAULT NULL,
  `codigo_autenticacion_usuario` varchar(4) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `usuario` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_usuario` (`email_usuario`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  KEY `fk_tabla_rol` (`fk_tabla_rol`),
  KEY `fk_tabla_estatus` (`fk_tabla_estatus`),
  KEY `fk_tabla_catalogo_negocios` (`fk_tabla_catalogo_negocios`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`fk_tabla_rol`) REFERENCES `rol` (`id_rol`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`fk_tabla_estatus`) REFERENCES `estatus` (`id_estatus`),
  CONSTRAINT `usuario_ibfk_3` FOREIGN KEY (`fk_tabla_catalogo_negocios`) REFERENCES `catalogo_negocios` (`id_negocio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
