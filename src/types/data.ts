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
