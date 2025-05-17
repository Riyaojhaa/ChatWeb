import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

dotenv.config();
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'mysql_db',
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL c  onnected successfully!");
  }
});

// // Insert data
// await db.execute(`
//   INSERT INTO users (USERNAME, EMAIL, PASSWORD)
//   VALUES ('Riya', 'rojha5250@gmail.com', 'riya1234')
// `);

////HASHED THE PASSWORD
// const plainPassword = "rishabh123";
// const saltRounds = 10;
// const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

// //INSERT DATA USING PREPARED STATEMENTS
// await db.execute(`
//   insert into users (USERNAME , EMAIL , PASSWORD) values (? , ? , ?)` , [
//   "Rishabh",
//   "rishabh123@gmail.com",
//   hashedPassword
//   ])

// //INSERT THE MULTIPLE DATA
// const values = [
//   ["Nisha", "nisha@gmail.com", "nisha123"],
//   ["antima", "antima@gmail.com", "antima123"],
//   ["akash", "akash@gmail.com", "akash123"],
// ]
// await db.query("insert into users(username , email , password) values ? " , [values]);

// //Read data
// const [rows] = await db.execute(`
//   SELECT * FROM users
// `);
// console.log(rows);


// //UPDATE THE DATA
//  try {
//    const [rows] = await db.execute(
//      "update users set username = ? where email = ? " , ["riyaojha" , "rojha5250@gmail.com"]
//    );
// console.log("All users ", rows);
//  } catch (error) {
//    console.log("error in updation", error);
//  }


// //DELETE SYNTAX
// await db.execute(
//   "delete from users where username = 'rishabhojha' "
// )

export default db;
