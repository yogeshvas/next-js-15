"use client";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
}

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  };
  const fetchUser = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data.user);
    setUser(response.data.user);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Profile</h1>

        {user ? (
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <p className="text-gray-400">Username</p>
              <p className="text-lg font-semibold text-white">{user.username}</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <p className="text-gray-400">Email</p>
              <p className="text-lg font-semibold text-white">{user.email}</p>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-4">
              <div>
                <p className="text-gray-400">Account Status</p>
                <p className="text-lg font-semibold">
                  {user.isVerified ? (
                    <span className="text-green-400">Verified</span>
                  ) : (
                    <span className="text-red-400">Not Verified</span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Role</p>
                <p className="text-lg font-semibold text-white">
                  {user.isAdmin ? "Admin" : "User"}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-400">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
