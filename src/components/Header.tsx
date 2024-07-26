import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import cancel from '../assets/cancel.svg'	

const MobileMenuIcon = ({ handleToggle }: any) => (
  <div
    onClick={handleToggle}
    className="flex flex-col items-center justify-center md:hidden cursor-pointer w-[50px] h-[50px] p-[1rem]"
  >
    <span
      className={`h-[.25rem] w-[1.2rem] bg-black-100 duration-[.3s] ease-in-out rounded-[12rem]`}
    />
    <span
      className={`w-[1.2rem] h-[.25rem] bg-black-100 rounded-[12rem] my-[.3rem]`}
    />
    <span
      className={`h-[.25rem]
       w-[1.2rem] bg-black-100 duration-[.3s] ease-in-out rounded-[12rem]`}
    />
  </div>
);

const Header = () => {
  const [active, setActive] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathName = window.location.pathname;

  const handleToggle = () => {
    // console.log('testing')
    setActive(!active);
    setOpenNavbar(!openNavbar);
  };
  return (
    <div className="relative">
      <nav className=" w-full md:fixed md:top-8 z-30">
        <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1300px] mx-auto bg-white md:rounded-[2rem]  border-[.25rem] border-gray-100 py-2 md:py-4 px-2 md:px-6 lg:px-10">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-1 md:gap-2">
              
              <h2 className=" text-black-100 font-bold text-[1rem] md:text-lg 2xl:text-xl">
                Focus Flow
              </h2>
            </Link>

            <MobileMenuIcon handleToggle={handleToggle} />

            <ul className="hidden md:flex md:gap-8 lg:gap-10">
              <li >
                <Link
                  to="/manage-tasks"
                  // className="nav-link"
                  className={`${pathName.includes("services") ? 'text-blue-100' : 'text-black-100'} nav-link`}
                >
                  Manage Tasks
                </Link>
              </li>

              <li>
                <Link to="/podmoro-timer" className={`${pathName === '/about' ? 'text-blue-100' : 'text-black-100'} nav-link`}>
                  Podmoro Timer
                </Link>
              </li>
            </ul>

            <Link
              to='/'
              className="hidden bg-blue-100 download-btn lg:w-[200px] h-16 text-gray-200 rounded-[1.5rem]  font-bold p-[10px] md:flex items-center justify-center"
            >
              Join our waitlist
            </Link>
          </div>
        </div>
      </nav>

      {openNavbar ? (
        <MobileMenuModal active={active} handleToggle={handleToggle} />
      ) : null}
    </div>
  );
};

export default Header;

const MobileMenuModal = ({
  active,
  handleToggle,
}: {
  active: boolean;
  handleToggle: () => void;
}) => {
  return (
    <div
      className={`bg-overlay fixed top-0 ${
        active ? "left-0" : "left-[-100%]"
      } z-50 w-full h-full flex justify-end`}
    >
      <div className="bg-secondary w-[90%] h-full py-6 px-6">
        <div className="flex justify-end mb-4">
          <img
            src={cancel}
            onClick={handleToggle}
            width={24}
            height={24}
            alt="Close Modal"
          />
        </div>
        <Link to='/' onClick={handleToggle} className="flex items-center gap-2 mb-8">
          
          <h2 className=" text-gray-200 font-bold text-[1rem]">
            Focus Flow
          </h2>
        </Link>
        <ul className="flex flex-col gap-10">
          <li>
            <Link to="/manage-tasks" onClick={handleToggle} className="mobile-menu-link">
              Manage Tasks
            </Link>
          </li>
          <li>
            <Link to="/podmoro-timer" onClick={handleToggle} className="mobile-menu-link">
                Podmoro Timer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
