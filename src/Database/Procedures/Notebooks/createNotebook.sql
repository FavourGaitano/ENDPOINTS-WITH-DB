CREATE PROCEDURE createNotebook(

    @user_id VARCHAR(100),
    @title VARCHAR(100),
    @content VARCHAR (255),
    @created_at VARCHAR (20)
    
    )

AS
BEGIN

    INSERT INTO Notebook(User_id, title , content , created_at)
    VALUES(@user_id, @title, @content, @created_at)

END