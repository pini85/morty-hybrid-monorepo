import { Request, Response } from "express";
import { generateToken, verifyToken } from "../utils/jwtUtils";
import { IUser, UserRoles } from "@shared/types/index";

const hardcodedUsers: IUser[] = [
  {
    id: "1",
    name: "MortyAdmin",
    username: "admin",
    password: "admin123",
    role: UserRoles.ADMIN,
  },
  {
    id: "2",
    name: "MortyUser",
    username: "user",
    password: "user123",
    role: UserRoles.USER,
  },
];

/**
 * Handles user login.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response with the user data and a token, or an error message.
 */
export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = hardcodedUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Best practice would be a shorter life span and a blacklist for the token.
  // Also should do a refresh token for better UX on the client side.
  // In the end, using a third party like Auth0 or Cognito is recommended.
  const token = generateToken(user);
  const { name, role, id } = user;
  res.json({ user: { name, role, id }, token });
};

/**
 * Handles user logout.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response with a logout message.
 */
export const logout = (req: Request, res: Response) => {
  res.json({ message: "Logged out successfully" });
};

/**
 * Retrieves the authenticated user's information.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response with the user data and a token, or an error message.
 */
export const me = (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    const { user } = decoded;

    res.json({ user, token });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
