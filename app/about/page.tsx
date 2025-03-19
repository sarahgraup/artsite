import Image from "next/image";

export default function Page() {
  return (
    <main className='min-h-screen bg-white text-gray-900 p-6 md:p-12'>
      {/* ABOUT Heading */}
      <h1 className='text-[14rem] leading-none font-italiana '>ABOUT</h1>

      {/* First Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12'>
        {/* Text Content */}
        <div>
          <p className='text-xl font-extralight text-dorado-600 leading-loose'>
            Hi, I’m <span className='font-semibold'>Sarah Graup</span>—an
            artist, a coder, and a storyteller. I’ve always been fascinated by
            the interplay of structure and spontaneity, of logic and intuition.
            Art and programming may seem like opposites, but to me, they are two
            ways of shaping the world— one through color and form, the other
            through logic and code.
          </p>
        </div>

        {/* Image */}
        <div>
          <Image
            src='/artwork/koi-fish.jpeg'
            width={500}
            height={600}
            alt='Artistic representation'
            className='rounded-lg shadow-lg'
          />
        </div>
      </section>

      <section className='mt-16 max-w-5xl mx-auto text-center px-6'>
        <p className='text-3xl font-extralight text-dorado-600 leading-loose '>
          Whether it’s designing generative art, building immersive web
          experiences, or crafting visually striking interfaces, I thrive on
          bringing creative and technical elements together.
        </p>
        <p className='mt-6 text-2xl text-dorado-600 font-semibold '>
          "Art is not what you see, but what you make others see."
        </p>
      </section>

      {/* Second Section (Skills + Experience) */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-24'>
        {/* Image */}
        <div>
          <Image
            src='/about-image-2.jpg'
            width={500}
            height={600}
            alt='Creative Process'
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Skills & Experience */}
        <div>
          <h2 className='text-4xl font-semibold mb-4'>Skills & Experience</h2>
          <ul className='text-xl font-extralight text-dorado-600 space-y-2'>
            <li>🎨 Digital Illustration & Mixed Media</li>
            <li>💡 Creative Direction & Concept Art</li>
            <li>📱 UI/UX Design for Web & Mobile</li>
            <li>🖥️ Next.js & Frontend Development</li>
          </ul>
        </div>
      </section>
      {/* Closing Call to Action */}
      <section className='mt-24 text-center max-w-3xl mx-auto'>
        <p className='text-lg font-extralight text-dorado-600 leading-loose'>
          If you’re interested in seeing my work, collaborating, or just
          chatting about the beautiful chaos of art and code, feel free to{" "}
          <a href='/contact' className='underline font-semibold'>
            reach out
          </a>
          !
        </p>
      </section>
    </main>
  );
}

