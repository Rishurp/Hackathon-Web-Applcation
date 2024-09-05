import logo from "../../public/assets/icons/Group 1000002532.svg";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="bg-[#FFFFFF] px-20 py-4  ">
        <img src={logo} alt="logo"></img>
      </nav>
    </div>
  );
};

export default Navbar;
