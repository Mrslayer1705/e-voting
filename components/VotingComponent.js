import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Ensure you have this component
import { Smartphone } from "lucide-react";

export default function VotingComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-64 bg-blue-100 flex items-center justify-center">
          <div className="relative w-48 h-64 flex items-center justify-center">
            <Smartphone className="w-full h-full text-blue-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-lg p-2 shadow-inner">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome to E-Voting</h1>
          <p className="text-gray-600 mb-6 text-center">Secure, transparent, and easy online voting at your fingertips</p>
          <div className="space-y-4">
            <Link href="/vote" className="block w-full">
              <Button className="w-full">Vote Now</Button>
            </Link>
            <Link href="/results" className="block w-full">
              <Button variant="outline" className="w-full">View Results</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
