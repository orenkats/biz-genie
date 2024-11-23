import { executeQuery } from "@/database/db";
import bcrypt from "bcrypt";
import {insertUser, selectAllUsers} from "@/database/queries";


export default async function handler(req, res) {
  if (req.method === "POST") {
    // Add a new user
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);  
        const result = await executeQuery(
        insertUser,
        [name, email, hashedPassword]
      );
      return res.status(201).json({ message: "User added successfully", userId: result.insertId });
    } catch (error) {
      console.error("Error inserting user:", error);
      return res.status(500).json({ error: "Failed to add user" });
    }
  } else if (req.method === "GET") {
    // Fetch all users
    try {
      const users = await executeQuery(selectAllUsers);
      return res.status(200).json({ users });
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ error: "Method not allowed" });
  }
}
