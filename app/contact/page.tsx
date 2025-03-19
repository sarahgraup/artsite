import ContactForm from "../components/ContactForm";

export default function Page() {
  const emailAddress = 'sarahgraup@g.ucla.edu';
  return (
    <div className='max-w-7xl h-screen mx-auto px-4 py-1'>
      <div className='grid grid-cols-1 sm:grid-cols-6 grid-rows-auto sm:grid-rows-6 h-full gap-2 sm:gap-8 mt-2'>
        <div className='col-span-1 sm:col-span-6 row-span-1 sm:row-span-1 flex justify-center items-center mt-2'>
          <h2 className='text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-medium text-bluemine-700 z-10 text-centern tracking-tighter'>
            Connect
          </h2>
        </div>
        {/* Content container - stacks on mobile, side by side on larger screens */}
        <div className='col-span-1 sm:col-span-6 row-span-5 sm:row-span-5 grid grid-cols-1 sm:grid-cols-6 grid-rows-auto gap-4'>
          {/* Left side - Image placeholder (shifted up slightly) */}
          <div className='col-span-1 sm:col-span-2 relative -mt-8 sm:-mt-16 z-0'>
            <div className='w-full h-full bg-gray-200 rounded-xl flex items-center justify-center'>
              {/* Replace with your actual image */}
              <p className='text-gray-500'>Place image here</p>
            </div>
          </div>

          {/* Right side - Content with proper spacing */}
          <div className='col-span-1 sm:col-span-4 flex flex-col space-y-8 pl-8 sm:pl-4'>
            {/* Paragraph */}

            <div className='max-w-xl p-8'>
              <p className='text-sm md:text-lg font-medium text-bluemine-700'>
                Whether you have a coding project that needs a creative touch or
                an art piece you&apos;d love to bring to life, I&apos;d love to
                hear from you!
              </p>
            </div>
            <div className='w-full pl-8'>
                <ContactForm />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
