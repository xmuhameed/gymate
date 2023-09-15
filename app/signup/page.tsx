"use client";
import { useAuth } from "@/Context/AuthContext";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Landing } from "@/Components/Landing";

const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      router.push("/");
    }catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <Landing mainHeading="About Us" />
      <div className="w-sreen mx-8 mt-16">
        <div className="w-full h-screen flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-black text-stone-50 py-28 px-6 md:px-14 flex flex-col gap-4 w-[98%] md:w-[80%] lg:w-[60%] xl:w-[35%] text-xl"
          >
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
              ref={emailRef}
              className="py-3 px-5 focus:outline-red-600 text-black"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              ref={passwordRef}
              className="py-3 px-5 focus:outline-red-600 text-black"
            />
            <label htmlFor="password">Password confirmation</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              ref={passwordConfirmRef}
              className="py-3 px-5 focus:outline-red-600 text-black"
            />
            <input
              type="submit"
              value="Signin"
              className="w-full bg-[color:var(--mainRed)] text-white py-3 my-5 cursor-pointer"
              disabled={loading}
            />
            <div className="text-sm">
              Already have account ?{" "}
              <Link
                href="/signin"
                className="text-[color:var(--mainRed)] ml-2 font-bold"
              >
                Sign In
              </Link>
            </div>
            <div className="text-sm">
              ( Make{" "}
              <span className="text-[color:var(--mainRed)]">new Accout</span> or
              go to <span className="text-[color:var(--mainRed)]">Sign In</span>{" "}
              Page for Test Account )
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
