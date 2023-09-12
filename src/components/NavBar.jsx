import logo from "../assets/logo.png";
import NavIcon from "../assets/icons8-logo-500.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-[0.5em] overflow-x-hidden">
            <img src={NavIcon} alt="Logo" className="h-[4.5em] pl-[1em]" />
            <img src={logo} alt="Logo Title" className="h-[7em]" />
        </div>
    );
};

export default Navbar;
