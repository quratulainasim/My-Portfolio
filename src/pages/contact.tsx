import Link from "next/link";
export default function Contact() {
  return (
    <div className="bg-pink-100 flex justify-center h-screen items-center">
      <div className="space-y-5 bg-green-500 p-10 rounded-3xl">
        <h1 className="text-yellow-50 text-3xl text-center font-bold ">
          Contact Us
        </h1>
        <form className="flex flex-col gap-5 text-2xl">
          <input
            type="text"
            className="p-2 rounded-md outline-none"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="p-2 rounded-md outline-none"
            placeholder="Enter your Email"
          />
          <textarea
            className="p-2 rounded-md outline-none resize-none"
            placeholder="Enter your Message"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-red-700 rounded-lg text-white transition-all font-bold hover:bg-red-500"
          />
        </form>
        <div className="flex justify-center">
          <Link href="/"></Link>
        </div>
      </div>
    </div>
  );
}
