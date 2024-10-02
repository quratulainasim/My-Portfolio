import Link from "next/link";
export default function About() {
  return (
    <div className="bg-pink-100 h-screen flex justify-center items-center px-20">
      <div className="bg-pink-400 space-y-5 p-5 rounded-md">
        <h1 className="text-blue-800 text-4xl font-bold text-center font-sans">
          About Me
        </h1>
        <p className="text=5xl text-black font-bold text-justify p-10">
          I hold an MSc in Analytical Chemistry and an EMBA in General
          Management, bringing six years of experience from working in a
          multinational company. Throughout my career, I’ve honed a strong
          analytical mindset and leadership skills, which I am now channeling
          into the exciting world of web development. I’m proficient in HTML,
          CSS, JavaScript, TypeScript, and Tailwind CSS, and I am currently
          expanding my expertise by learning Next.js. As I transition into this
          new field, I aim to create innovative, efficient, and user-centered
          digital solutions.
        </p>
        <Link href="/"></Link>
      </div>
    </div>
  );
}
