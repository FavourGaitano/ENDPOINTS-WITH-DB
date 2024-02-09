import dotenv from 'dotenv'
import mssql from 'mssql'


dotenv.config();


export const sqlConfig = {

    user: process.env.DB_USER || 'sa', 
    password: process.env.DB_PWD || 'SQL-SERVER' ,
    database: process.env.DB_NAME || 'NoteBook',
    server :'FAVOUR\\FAVOUR',

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, 
    trustServerCertificate: false 
    }
};

console.log(sqlConfig);

// let connect = async () =>{
//     let pool = await mssql.connect(sqlConfig)

//     if(pool.connected){
//         console.log("connected");

//         let query = 'CREATE TABLE Notebook(user_id VARCHAR(100) NOT NULL, title VARCHAR(100) NOT NULL, content VARCHAR(255) NOT NULL, created_at VARCHAR(20))'

//         // let query2 = 'DROP TABLE Users'
//         let result = (await (await pool.connect()).query(query)).rowsAffected

//         console.log(result);
        
//     }else{
//         console.log('not connected');
        
//     }
// }

// connect()
