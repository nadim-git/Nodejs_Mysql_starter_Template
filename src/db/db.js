
const mysql = require('mysql');
 
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
    multipleStatements: true,
});
pool.getConnection((err) => {
    if (err) {
      console.log("DB Err : ", err);
      throw err;
    }
    console.log("DB connected...!");
  });
  


// Get data using Async await Mysql + NodeJs
getCommon = async (querySql, valuesOne = []) =>{
    return new Promise((resolve, reject)=>{
        pool.query(querySql, valuesOne, (error, data)=>{
            if(error){
                return reject(error);
            }
            return resolve(data);
        });
    });
};

module.exports = {pool, getCommon } ;