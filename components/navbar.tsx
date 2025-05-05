import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@heroui/navbar";
import { Link } from "@heroui/link";


export default function Navbar() {
  return (
    <HeroNavbar isBordered className="flex items-center justify-between p-4">
      <NavbarBrand>
        <h1>Ogwara Precious Alisha</h1>
        {/* You can add the "ACME" text here if you still want it */}
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="call">
            Book a call
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
}