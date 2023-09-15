"use client";
import { Landing } from "@/Components/Landing";
import { useAuth } from "@/Context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

const MangeAcc = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [updateEmail, setUpdateEmail] = useState(true);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [error, setError] = useState("");
  const [sucsess, setSucsess] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current?.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current?.value));
    }
    if(passwordRef.current?.value){
      promises.push(updateUserPassword(passwordRef.current?.value));
    }
    Promise.all(promises).then(() => {
      setSucsess("Account Updated");
      setTimeout(() => {router.push("/");}, 3000);
    }).catch(() => {
      setError("Failed to update account");
    }).finally(() => {
      setLoading(false);
    })
  }
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
            <div className="flex justify-between items-center">
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                className="py-3 px-5 focus:outline-red-600 text-black w-[85%] inline-block"
                defaultValue={currentUser.email}
                disabled={updateEmail}
                ref={emailRef}
              />
              <div className="inline-flex justify-center items-center w-[15%] text-lg cursor-pointer" onClick={() => setUpdateEmail(false)}>
                <FiEdit />
              </div>
            </div>
            {updatePassword &&
             <><label htmlFor="password">New Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              ref={passwordRef}
              className="py-3 px-5 focus:outline-red-600 text-black"
            />
            <label htmlFor="password">New Password Confirmation</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              ref={passwordConfirmRef}
              className="py-3 px-5 focus:outline-red-600 text-black"
            /></>}
            <label htmlFor="password">Current Password</label>
            <input
              type="password"
              placeholder="Your Password"
              id="password"
              className="py-3 px-5 focus:outline-red-600 text-black"
              ref={currentPasswordRef}
              required
            />
            {!updatePassword && <div className="text-[color:var(--mainRed)] text-sm cursor-pointer" onClick={() => setUpdatePassword(true)}>Change Password</div>}
            <input
              type="submit"
              value="Update"
              className="w-full bg-green-500 text-black py-3 my-2 cursor-pointer"
            />
            <Link
              href="/"
              className="w-full bg-[color:var(--mainRed)] text-white text-center py-3"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default MangeAcc;
