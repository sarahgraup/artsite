import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='border-b border-b-dorado-300 max-w-7xl mx-auto px-4'>
      <div className='flex justify-between items-center h-20'>
        {/* Logo and Name using Cinzel font */}
        <Link href='/' className='flex items-center'>
          <span className='font-italiana  text-3xl text-dorado-900'>
            SARAH GRAUP
          </span>
        </Link>

        {/* Navigation Links using Host Grotesk font */}
        <div className='flex space-x-6'>
          <Link
            href='/'
            className='font-italiana text-2xl text-dorado-900 hover:text-blumine-700'
          >
            Gallery
          </Link>
          <Link
            href='/about'
            className='font-italiana text-2xl text-dorado-900 hover:text-blumine-700'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='font-italiana text-2xl text-dorado-900 hover:text-blumine-700'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
// import Link from "next/link";

// export default function Navbar() {
//     return (
//       <nav className='border-b border-b-dorado-300 max-w-7xl'>
//         <div className='max-w-10xl max-auto px-4'>
//           <div className='flex justify-between h-16 items-center'>
//             <Link href='/' className='text-dorado-900'>
//               SARAH GRAUP
//             </Link>
//             <div className='space-x-8'>
//               <Link href='/' className='text-dorado-900 hover:text-dorado-600'>
//                 Gallery
//               </Link>
//               <Link
//                 href='/about'
//                 className='text-dorado-900 hover:text-dorado-600'
//               >
//                 About
//               </Link>
//               <Link
//                 href='/contact'
//                 className=' text-dorado-900 hover:text-dorado-600'
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
// }
// import Link from "next/link";
// import { header } from "../ui/fonts";

// export default function Navbar() {
//   return (
//     <nav className="border-b border-b-dorado-300 max-w-7xl mx-auto px-4">
//       <div className="flex justify-between items-center h-20">
//         {/* Logo and Name section */}
//         <Link href="/" className="flex items-center group">
//           {/* Simple abstract logo */}
//           <div className="w-10 h-10 mr-3 relative">
//             <div className="absolute inset-0 bg-blumine-700 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-dorado-300 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
//           </div>

//           {/* Name with special font */}
//           <span
//             className={`${header.className} text-2xl sm:text-3xl text-dorado-900 tracking-wider group-hover:text-blumine-700 transition-colors`}
//           >
//             SARAH GRAUP
//           </span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden sm:flex space-x-1 md:space-x-2 lg:space-x-6">
//           {/* Link items with hover effects */}
//           {["Gallery", "About", "Contact"].map((item, index) => (
//             <Link
//               key={index}
//               href={item === "Gallery" ? "/" : `/${item.toLowerCase()}`}
//               className="relative px-4 py-2 text-dorado-900 hover:text-blumine-700 group"
//             >
//               <span className="relative z-10">{item}</span>
//               {/* Hover indicator line that animates */}
//               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blumine-700 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile menu button - simple for now */}
//         <button className="sm:hidden text-dorado-900">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }
