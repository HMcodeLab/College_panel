// import Image from "next/image";
// import Link from "next/link";
// // import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { FaBars, FaXmark } from "react-icons/fa6";

// export default function MobileHeader() {
//   const [open, setOpen] = useState<boolean>(false);
//   // const path = usePathname();
//   return (
//     <div className="bg-white shadow-lg select-none fixed top-0 z-10 w-full">
//       <div className="px-6 py-3 xl:hidden flex justify-between items-center">
//         <Link href={"/"}>
//           <Image
//             src="/images/logo/logo.png"
//             width={60}
//             height={60}
//             alt="logo"
//           />
//         </Link>
//         {open ? (
//           <FaXmark
//             onClick={() => setOpen(false)}
//             size={24}
//             className="text-gray-600 cursor-pointer"
//           />
//         ) : (
//           <FaBars
//             onClick={() => setOpen(true)}
//             size={24}
//             className="text-gray-600 cursor-pointer"
//           />
//         )}
//       </div>

//       <div
//         className={`text-sm font-semibold w-full justify-center items-center
//         bg-white p-3 text-gray-600 px-24 flex flex-col xl:hidden
//         ${open ? "flex" : "hidden"}`}
//       >
//         <div>
//           <input
//             type="text"
//             placeholder="Search Courses..."
//             className="border-2 border-gray-300 rounded-lg p-2 w-64"
//           />
//         </div>
//         <ul className="flex-col flex gap-y-1">
//           {/* <Link
//             href={"/"}
//             className={`min-w-20 p-2 text-center ${path === "/" && "active"}`}
//           >
//             <li className="capitalize">Home</li>
//           </Link> */}
//           {/* <Link
//             href={"/about-us"}
//             className={`min-w-20 p-2 text-center ${
//               path === "/about-us" && "active"
//             }`}
//           >
//             <li className="capitalize">About Us</li>
//           </Link> */}

//           {/*          
//           <Link
//             href={"/contact"}
//             className={`hover:text-primary-500 min-w-20 p-2 text-center ${
//               path === "/contact" && "active"
//             }`}
//           >
//             <li className="capitalize">contact</li>
//           </Link> */}
//         </ul>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import React from "react";

interface MobileHeaderProps {
  toggleSidebar: () => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  toggleSidebar,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="bg-white shadow-lg select-none fixed top-0 z-50 w-full">
      <div className="px-6 py-3 xl:hidden flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="https://storage.googleapis.com/online-degree-node1-prod-cdn/assets/img/swayam_images/swayam_logo.png"
            width={120}
            height={120}
            alt="logo"
          />
        </Link>

        <FaBars
          onClick={toggleSidebar}
          size={24}
          className="text-gray-600 cursor-pointer"
        />
      </div>

      {/* Search Box */}
      <div className="px-6 pb-3 xl:hidden relative">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 pr-10 w-full h-11"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-10 flex items-center text-gray-400 hover:text-gray-700"
            type="button"
          >
            <span className="text-xl leading-none">&#10005;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
