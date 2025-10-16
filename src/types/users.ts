export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface UserDTO {
  id: string;
  email: string;
  role: UserRole;
}
