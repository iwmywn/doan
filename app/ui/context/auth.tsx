"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  isSignedIn: boolean;
  userId?: string;
  image?: string;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/auth/status", {
        method: "GET",
      });

      if (res.ok) {
        const result: AuthContextType = await res.json();
        setIsSignedIn(result.isSignedIn);
        setUserId(result.userId);
        setImage(result.image);
      }
      setIsLoading(false);
    }

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, userId, image, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const cxt = useContext(AuthContext);
  if (!cxt) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return cxt;
}