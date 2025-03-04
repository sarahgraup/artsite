import Link from "next/link";

export default function Navbar() {
    return (
      <nav className='border-b border-b-dorado-300'>
        <div className='max-w-10xl max-auto px-4'>
          <div className='flex justify-between h-16 items-center'>
            <Link href='/' className='text-dorado-900 font-bold'>
              Sarah Graup
            </Link>
            <div className='space-x-8'>
              <Link href='/' className='text-dorado-900 hover:text-dorado-600'>
                Gallery
              </Link>
              <Link
                href='/about'
                className='text-dorado-900 hover:text-dorado-600'
              >
                About
              </Link>
              <Link
                href='/contact'
                className=' text-dorado-900 hover:text-dorado-600'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}