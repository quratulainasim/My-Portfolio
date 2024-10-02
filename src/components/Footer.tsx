import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-800 flex justify-between p-3">
      <ul className="flex gap-x-4 text-white font-sans font-semibold items-center">
        <li>
          <Link className="hover:text-yellow-500" href="https://x.com">Twitter</Link>
        </li>
        <li>
          <Link className="hover:text-yellow-500"href="https://www.linkedin.com">linked</Link>
        </li>
        <li>
          <Link className="hover:text-yellow-500" href="https://www.facebook.com">facebook</Link>
        </li>
      </ul>

      <div className="justify-center">
        <p className="text-yellow-50 items-center font-sans font-semibold ">
          Creating experiences since 2020
        </p>
        <p className="text-yellow-50 items-center font-sans font-semibold sm:text-sm">
          Qain@Qurat.com
        </p>
      </div>
    </footer>
  );
}
export default Footer;
