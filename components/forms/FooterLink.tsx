import Link from "next/link";

type FooterLinkProps = {
  text: string;
  linkText: string;
  href: string;
};

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
  return (
    <p className="pt-2 text-center text-sm text-gray-500">
      {text}{" "}
      <Link href={href} className="footer-link">
        {linkText}
      </Link>
    </p>
  );
};

export default FooterLink;
