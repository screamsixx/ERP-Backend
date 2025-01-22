DELIMITER $$

CREATE FUNCTION login(
  p_email VARCHAR(100),
  p_password VARCHAR(50)
)
RETURNS INT
DETERMINISTIC 
BEGIN
  DECLARE user_id INT;

  SELECT 
    id 
  INTO user_id
  FROM usuario
  WHERE email = p_email AND pass = p_password;

  IF user_id IS NOT NULL THEN
    -- Si el usuario existe, devuelve su ID
    RETURN user_id;
  ELSE
    -- Si el usuario no existe, devuelve 0
    RETURN 0;
  END IF;
END $$

DELIMITER ;