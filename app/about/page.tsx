export default function Page() {
  return (
    <div className='grid h-screen grid-cols-5 grid-rows-5 gap-4'>
      <div className='col-span-2 row-span-5 bg-dorado-600 rounded-xl'>
        1 &nbsp;
      </div>
      <div className='col-span-3 row-span-2 col-start-3 bg-dorado-600 rounded-xl'>
        <h1>About Me</h1>
      </div>
      <div className='col-span-3 row-span-3 col-start-3 row-start-3 bg-dorado-600 rounded-xl'>
        Hi, I’m Sarah Graup—an artist, a coder, and a storyteller. I’ve always
        been fascinated by the interplay of structure and spontaneity, of logic
        and intuition. Art and programming may seem like opposites, but to me,
        they are two ways of shaping the world—one through color and form, the
        other through logic and code. My artwork leans toward [describe
        style—e.g., surreal landscapes, abstract compositions, etc.], often
        inspired by [e.g., dreams, nature, cityscapes, emotions]. Meanwhile, my
        programming work reflects a similar sense of exploration—I love creating
        interactive experiences, elegant user interfaces, and tools that feel
        intuitive yet dynamic. When these two passions intersect, magic happens.
        Whether it’s designing generative art, building immersive web
        experiences, or crafting visually striking interfaces, I thrive on
        bringing creative and technical elements together. If you’re interested
        in seeing my work, collaborating, or just chatting about the beautiful
        chaos of art and code, feel free to reach out!
      </div>
    </div>
  );
}
