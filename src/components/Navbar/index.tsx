import BellLogo from "@/assets/bellLogo";
import ExitLogo from "@/assets/exitLogo";
import Logo from "@/assets/logo";
import OverallLogo from "@/assets/OverallLogo";
import SearchLogo from "@/assets/searchLogo";
import UserSettings from "@/assets/userSettings";
import React from "react";

const Navbar = () => {
  const navItems = ["Home", "Portfolio", "Mutual Funds", "Tools", "Transactions"];

  return (
    <div className="fixed top-0 h-20 p-6 bg-[#1B1A1A] w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center cursor-pointer ml-6">
          <Logo />
          <div className="flex ml-32 gap-11">
            {navItems.map((navItem: string, id: number) => (
              <span
                key={id}
                className={`text-[#D1D1D1] cursor-pointer inline-block ${
                  navItem === "Portfolio"
                    ? "text-[#F6F6F6] border-b-[2px] border-[#0070DF]"
                    : "hover:text-white transition"
                }`}
              >
                {navItem}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-10 cursor-pointer mr-5">
          <OverallLogo/>
          <ExitLogo/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
