"use client";
import { useAuth } from "@/Context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const User = () => {
  const { currentUser } = useAuth();
  const { logOut } = useAuth();
  const [userMenu, setUserMenu] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogOut = async () => {
    setError("");
    try {
      setUserMenu(false);
      await logOut();
      router.push("/");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <>
   {userMenu && <div className="h-screen w-screen fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" onClick={() => setUserMenu(false)}></div>}
    <div className="relative">
      <div
        className="bg-[var(--mainRed)] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold cursor-pointer"
        onClick={() => setUserMenu(!userMenu)}
      >
        {currentUser.email[0].toUpperCase()}
      </div>
      <div
        className={`${
          userMenu
            ? "opacity-100 -translate-x-[50%]"
            : "opacity-0 translate-x-96"
        } w-fit h-fit py-4 px-2 z-30 bg-white absolute top-14 left-[50%] -translate-x-[50%] rounded-md transition-all overflow-hidden flex justify-center items-center gap-7`}
      >
        <ul className="text-center flex flex-col gap-3">
            <li className="text-sm">hello : {currentUser.email}</li>
            <hr className="w-full" />
            <li className="cursor-pointer"><Link href="/mangeAccount">Mange Your Account</Link></li>
            <hr className="w-full" />
            <li className="text-[var(--mainRed)] font-extrabold cursor-pointer" onClick={handleLogOut}>Log Out</li>
        </ul>
      </div>
    </div>
    </>
  );
};
