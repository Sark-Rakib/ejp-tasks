"use client";

import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return <p className="text-center">Loading...</p>;

  return children;
}
