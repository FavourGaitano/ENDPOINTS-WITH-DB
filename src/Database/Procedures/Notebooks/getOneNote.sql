CREATE OR ALTER PROCEDURE getOneNote(@user_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM Notebook  WHERE user_id = @user_id
END