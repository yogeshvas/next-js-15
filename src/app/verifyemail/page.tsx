"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoaderIcon } from "react-hot-toast";
const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.error(
        "Email verification error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);
  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="text-lg">{token ? `${token}` : "No token"}</h2>
      {loading ? (
        <div className="mt-4">
          <LoaderIcon />
        </div>
      ) : (
        <div className="mt-4">
          {verified && (
            <div className="text-green-500">
              Email verified successfully! You can now close this page.
            </div>
          )}
          {error && (
            <div className="text-red-500">
              Error verifying email. Please try again or contact support.
            </div>
          )}
          {!verified && !error && (
            <div className="text-gray-600">Verifying your email...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
