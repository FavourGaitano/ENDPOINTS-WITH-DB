CREATE PROCEDURE updateNote(
     @user_id VARCHAR(100),
    @title VARCHAR(100),
    @content VARCHAR (255),
    @created_at VARCHAR (20)
    )
AS
BEGIN
    UPDATE Users SET 
        title=@title,
        content=@content,
        created_at=@created_at

    WHERE user_id = @user_id
END