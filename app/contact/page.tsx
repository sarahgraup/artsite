import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <div className='max-w-7xl min-h-screen mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-8'>
        <div className='sm:col-span-2 p-4 rounded-xl'>
          <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold text-bluemine-700 pb-8'>
            Let&apos;s Work Together!
          </h2>
          <p className='mt-2 text-sm font-medium text-bluemine-700 sm:text-lg'>
            Whether you have a coding project that needs a creative touch or an
            art piece you&apos;d love to bring to life, I&apos;d love to hear
            from you!
          </p>
        </div>
        <div className='sm:col-span-3 p-8 border-2 border-dorado-900 rounded-md'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
