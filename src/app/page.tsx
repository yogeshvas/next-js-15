import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Your Profile
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          This is a beautifully crafted page built by Yogesh
        </p>

        <Link
          href="/profile"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-2 hover:scale-105 transform"
        >
          Visit Profile
          <ArrowRight className="w-5 h-5" />
        </Link>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Explore your personalized dashboard and manage your settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
