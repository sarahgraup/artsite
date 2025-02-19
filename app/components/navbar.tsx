import Link from "next/link";

export default function Navbar() {
    return (
      <nav className='border-b'>
        <div className='max-w-10xl max-auto px-4'>
          <div className='flex justify-between h-16 items-center'>
            <Link href='/' className='font-bold'>
              Sarah Graup
            </Link>
            <div className='space-x-8'>
              <Link href='/' className='hover:text-gray-600'>
                Gallery
              </Link>
              <Link href='/about' className='hover:text-gray-600'>
                About
              </Link>
              <Link href='/contact' className='hover:text-gray-600'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}