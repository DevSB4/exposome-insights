import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://exposome-insights.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases based on the server response
        const errorMessage =
          data.error || "Failed to login. Please try again later.";
        setError(errorMessage);
      } else {
        // Save the user data to local storage
        try {
          localStorage.setItem("user", JSON.stringify(data));
        } catch (e) {
          console.error("Error saving user data to localStorage:", e);
        }

        // Update the auth context
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (e) {
      // Handle network errors or other unexpected errors
      setError("An unexpected error occurred. Please try again later.");
      console.error("Error during login:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
