import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { userLogout } from "../../actions/userActions";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Logo } from "../logos";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userLogin);

  const { cartItems } = useSelector((state) => state.cart);

  const noCartItems = cartItems.length;

  const handleUserLogout = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="bg-white text-darkBlue text-bg-indigo-600  border-b border-gray-100 sticky top-0 p-4">
      <section className="relative max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* logo and brand name */}
        <div className="hidden sm:flex items-center justify-between">
          <Logo />
        </div>
        {/* mobile menu button */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden space-x-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiMenuAlt1 className="inline md:hidden h-8 w-8" />
            ) : (
              <HiMenu className="inline md:hidden h-8 w-8" />
            )}
          </button>
          <Logo />
        </div>
        {/* desktop menu */}
        <DesktopMenu
          user={user}
          handleUserLogout={handleUserLogout}
          noCartItems={noCartItems}
        />
      </section>
      {/* mobile menu */}
      {isOpen && (
        <MobileMenu
          user={user}
          handleUserLogout={handleUserLogout}
          noCartItems={noCartItems}
        />
      )}
    </nav>
  );
};

export default Navigation;
