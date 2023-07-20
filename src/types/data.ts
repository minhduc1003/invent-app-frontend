export interface dataLogIn {
  email: string;
  password: string;
}
export interface dataSignUp {
  email: string;
  password: string;
  name: string;
}
export interface sentToken {
  email: string;
}
export interface refreshPassword {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
export interface userContext {
  islogin: () => void;
}
export interface userData {
  name: string;
  email: string;
  photo: string;
  phone: number;
  bio: string;
  permission: string;
}
