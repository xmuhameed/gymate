'use client'
import Link from "next/link";
import { Landing } from "@/Components/Landing";
import { useRouter } from "next/navigation";
import {useRef, useState} from "react";
import { useAuth } from "@/Context/AuthContext";

const ForgotPassword = () => {
    const { restPassword } = useAuth();
    const [error, setError] = useState("");
    const [sucsess, setSucsess] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await restPassword(emailRef.current?.value);
      setSucsess("Check your inbox for rest link");
      setTimeout(() => {router.push("/");}, 3000);
    } catch {
      setError("Failed to rest your password");
    }}
  return (
    <>
      <Landing mainHeading="About Us" />
      <div className="w-sreen mx-8 mt-8">
        <div className="w-full h-screen flex justify-center items-center">
          <form className="bg-black text-stone-50 py-28 px-6 md:px-14 flex flex-col gap-4 w-[98%] md:w-[80%] lg:w-[60%] xl:w-[35%] text-xl" onSubmit={handleSubmit}>
          {error && (
              <div className="bg-red-500 text-white text-center py-2">
                {error}
              </div>
            )}
          {sucsess && (
              <div className="bg-green-500 text-white text-center py-2">
                {sucsess}
              </div>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              className="py-3 px-5 focus:outline-red-600 text-black"
              ref={emailRef}
            />
            <input
              type="submit"
              value="Rest Password"
              className="w-full bg-[color:var(--mainRed)] text-white py-3 my-5"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
