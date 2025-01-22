DELIMITER $$

CREATE FUNCTION insertar_usuario(
  p_pass VARCHAR(50),
  p_nombre VARCHAR(50),
  p_apellidoPaterno VARCHAR(50),
  p_apellidoMaterno VARCHAR(50),
  p_email VARCHAR(100),
  p_fechaNacimiento DATE,
  p_rol INT
)
RETURNS INT
DETERMINISTIC 
BEGIN
  INSERT INTO `ejemplo`.`usuario` 
  (`pass`, `nombre`, `apellidoPaterno`, `apellidoMaterno`, `email`, `fechaNacimiento`, `rol`) 
  VALUES ( p_pass, p_nombre, p_apellidoPaterno, p_apellidoMaterno, p_email, p_fechaNacimiento, p_rol);

  RETURN ROW_COUNT();
END $$

DELIMITER ;