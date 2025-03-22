import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Next.js Docker
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                概要
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                機能
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
