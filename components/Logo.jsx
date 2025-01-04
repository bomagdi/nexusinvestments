import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";




const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? "/nexus-logo-dark.svg" : "/nexus-logo-light.svg"}
        width={110}
        height={110}
        priority
        alt="Nexus Logo"
      />
    </Link>
  );
};

export default Logo;
