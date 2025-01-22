DELIMITER $$

CREATE FUNCTION eliminar_usuario( p_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE filas_afectadas INT;
  
  DELETE FROM usuario WHERE id = p_id;
  SET filas_afectadas = ROW_COUNT();
  
  RETURN filas_afectadas;
END $$

DELIMITER ;