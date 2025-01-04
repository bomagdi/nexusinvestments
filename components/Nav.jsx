import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react"

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about us" },
  { path: "/properties", name: "properties" },
  { path: "/contact", name: "contact us" },
  { path: "/blog", name: "our blog" },
];

const Nav = ({ containerStyle, linkStyle, underlineStyle }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyle}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyle}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
