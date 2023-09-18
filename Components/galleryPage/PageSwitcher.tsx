import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

export const PageSwitcher = () => {
    const router = usePathname();
    const incresNum = +(router[router.length - 1]) + 1;
    const decresNum = +(router[router.length - 1]) - 1;
  return (
    <div className="flex justify-center items-center gap-2 mx-auto mt-16">
      <Link
        href={`/gallery/page-${decresNum}`}
        className={`w-12 h-12 border-2 border-solid border-gray-200 rounded-lg bg-white shadow-2xl cursor-pointer flex justify-center items-center ${
          router == "/gallery/page-1" && "hidden"
        }`}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </Link>
      <Link
        href={`/gallery/page-1`}
        className={`w-12 h-12 border-2 border-solid border-gray-200 rounded-lg shadow-2xl cursor-pointer flex justify-center items-center ${
          router[router.length - 1] == "1" && "bg-[var(--mainRed)] text-white"
        }`}
      >
        1
      </Link>
      <Link
        href={`/gallery/page-2`}
        className={`w-12 h-12 border-2 border-solid border-gray-200 rounded-lg shadow-2xl cursor-pointer flex justify-center items-center ${
          router[router.length - 1] == "2" && "bg-[var(--mainRed)] text-white"
        }`}
      >
        2
      </Link>
      <Link
        href={`/gallery/page-${incresNum}`}
        className={`w-12 h-12 border-2 border-solid border-gray-200 rounded-lg bg-white shadow-2xl cursor-pointer flex justify-center items-center ${
          router == "/gallery/page-2" && "hidden"
        }`}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </Link>
    </div>
  );
};
