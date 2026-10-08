"use server";

type AuthResult = {
  success: boolean;
  error?: string;
};

export const signInWithEmail = async (
  _data: SignInFormData,
): Promise<AuthResult> => {
  return {
    success: false,
    error: "Email sign-in is not set up yet.",
  };
};

export const signUpWithEmail = async (
  _data: SignUpFormData,
): Promise<AuthResult> => {
  return {
    success: false,
    error: "Email sign-up is not set up yet.",
  };
};
