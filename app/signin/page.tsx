'use client';
import Link from "next/link";
import { Landing } from "@/Components/Landing";
import { useAuth } from "@/Context/AuthContext";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";


const Signin = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current?.value, passwordRef.current?.value);
      router.push("/");
    }catch {
      setError("Failed to login into your account");
    }
    setLoading(false);
  };
  return (
    <>
      <Landing mainHeading="Sign In" />
      <div className="w-sreen mx-8 mt-8">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="bg-black text-stone-50 py-28 px-6 md:px-14 flex flex-col gap-4 w-[98%] md:w-[80%] lg:w-[60%] xl:w-[35%] text-xl" onSubmit={handleSubmit}>
          {error && (
              <div className="bg-red-500 text-white text-center py-2">
                {error}
              </div>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="gymate@gymail.com"
              id="email"
              className="py-3 px-5 focus:outline-red-600 text-black"
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              className="py-3 px-5 focus:outline-red-600 text-black"
              ref={passwordRef}
            />
            <Link
              href="/forgotpassword"
              className="text-[color:var(--mainRed)] text-sm"
            >
              Forgot your Password ?
            </Link>
            <input
              type="submit"
              value="Sign In"
              className="w-full bg-[color:var(--mainRed)] text-white py-3 my-5 cursor-pointer"
              disabled={loading}
            />
            <div className="text-sm">
              New to Gymate ?{" "}
              <Link
                href="/signup"
                className="text-[color:var(--mainRed)] ml-2 font-bold"
              >
                Sign Up
              </Link>
            </div>
            <div className="text-sm">
              <span className="text-[color:var(--mainRed)]">Test Account</span>-
              gymate@gymail.com{" "}
              <span className="text-[color:var(--mainRed)]">/</span>{" "}
              testpassword123
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signin;
