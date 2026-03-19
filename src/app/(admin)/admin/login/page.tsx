"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace 'RadheRadhe2026' with whatever password you want!
    if (password === "RadheRadhe2026") {
      // We save a small 'flag' in the browser to remember we are logged in
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("गलत पासवर्ड! कृपया पुनः प्रयास करें। (Incorrect Password)");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FFFCF5] px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
        <div className="text-center mb-8">
          <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="text-white" size={30} />
          </div>
          <h1 className="text-2xl font-black text-red-900">एडमिन लॉगिन (Admin)</h1>
          <p className="text-gray-600 font-medium">संस्थान प्रबंधन के लिए प्रवेश करें</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">पासवर्ड (Password)</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-orange-100 focus:border-red-900 outline-none transition-all"
                placeholder="••••••••"
                required
              />
              <Lock className="absolute left-4 top-3.5 text-orange-300" size={20} />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm font-bold text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            लॉगिन करें (Login)
          </button>
        </form>
      </div>
    </div>
  );
}