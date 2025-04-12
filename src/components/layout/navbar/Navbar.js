import TopBar from "./TopBar";
import NavbarMainBody from "./NavbarMainBody";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <TopBar />
      <div className="w-full px-8 max-[1020px]:px-4 flex flex-col">
        <NavbarMainBody />
        <NavbarBottom />
      </div>
    </div>
  );
};

export default Navbar;
