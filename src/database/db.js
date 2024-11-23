import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export const executeQuery = async (query, values = []) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(query, values);
    await connection.end();
    return results;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
};
