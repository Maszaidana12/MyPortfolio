import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Spacer agar tidak lompat saat navbar fixed */}
      <div className="h-[96px]"></div>

      <div
        className={`navbar py-7 px-6 flex items-center justify-between z-50 ${
          active
            ? "fixed top-0 left-0 w-full bg-zinc-900 shadow-md"
            : "absolute top-0 left-0 w-full bg-transparent"
        }`}
      >
        <div className="px-6 py-4">
          {!(isMobile && active) && (
            <div className="logo">
              <h1 className="text-xl font-bold p-1 md:bg-transparent md:text-white">
                Mas Ahmad Zaidi Wardana
              </h1>
            </div>
          )}
        </div>

        <ul
          className={`menu flex items-center sm:gap-10 gap-4 fixed md:static left-1/2 -translate-x-1/2 
            md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 
            rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
          <li>
            <a
              href="#home"
              className="sm:text-base text-base font-medium hover:bg-blue-800 rounded-2xl p-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="sm:text-base text-base font-medium hover:bg-blue-800 rounded-2xl p-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="sm:text-base text-base font-medium hover:bg-blue-800 rounded-2xl p-4"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="sm:text-base text-base font-medium hover:bg-blue-800 rounded-2xl p-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
