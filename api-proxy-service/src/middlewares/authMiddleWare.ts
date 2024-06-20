import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/auth.types";
import { verifyToken } from "../utils/jwtUtils";

/**
 * Middleware function to authenticate and authorize users based on JWT token.
 * Verifies the token from the 'Authorization' header, sets user information in 'req.user',
 * and passes control to the next middleware or route handler.
 * Returns a 401 status with an error message if authentication fails.
 */

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    const { user } = decoded;

    req.user = user;
    // Optionally, expose user information for fine-grained authorization checks
    // Example: req.user.role can be used for role-based access control (RBAC)
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
