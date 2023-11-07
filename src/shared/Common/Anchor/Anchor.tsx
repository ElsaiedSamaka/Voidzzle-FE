import Link from "next/link";
import { usePathname } from "next/navigation";
const Anchor = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`rounded-l-none hover:border-l-4 outline-none transition-all duration-100 ease-in-out rounded-2xl block text-sm ${
        active
          ? " border-l-4 border-l-black  transition-all duration-100 ease-in-out  font-bold"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
