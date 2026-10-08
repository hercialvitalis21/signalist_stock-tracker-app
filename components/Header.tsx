import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header sticky top-0">
      <div className="header-wrapper container">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={130}
            height={30}
            priority
          />
        </Link>
        <nav className="header-nav">
          <Link href="/" className="hover:text-yellow-400">
            Dashboard
          </Link>
          <Link href="/sign-in" className="hover:text-yellow-400">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
