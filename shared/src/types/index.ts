/**
 * Enum for user roles in the system.
 * @enum {string}
 */
export enum UserRoles {
  /** Admin role with all access. */
  ADMIN = "admin",
  /** Regular user role with limited access. */
  USER = "user",
  /** Guest role with minimal access. */
  GUEST = "guest",
}

/**
 * Interface representing a user in the system.
 */
export interface IUser {
  /** The unique identifier of the user. */
  id: string;
  /** The name of the user. */
  name: string;
  /** The role of the user. */
  role: UserRoles;
  /** Optional username for the user. */
  username?: string;
  /** Optional password for the user. */
  password?: string;
}

/**
 * Interface for the authentication response.
 */
export interface IAuthResponse {
  /** The authenticated user. */
  user: IUser;
  /** The JWT token for authentication. */
  token: string;
}

/**
 * Interface representing the payload of a JWT token.
 */
export interface JwtPayload {
  /** The user information. */
  user: IUser;
  /** Issued at timestamp. */
  iat: number;
  /** Expiration timestamp. */
  exp: number;
}
