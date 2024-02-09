CREATE OR ALTER PROCEDURE deleteNote(@user_id VARCHAR(100))
AS
BEGIN
    DELETE Notebook WHERE user_id = @user_id
END