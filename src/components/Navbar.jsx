import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [percent, setPercent] = useState(0);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPercent(Math.round((winScroll / height) * 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 80; // Adjust this based on your navbar height (py-4 = ~64px, py-5 = ~80px, py-6 = ~96px)
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <div
          className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
          style={{ width: `${percent}%` }}
        ></div>

        <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
          <div className="flex items-center">
            <a className="cursor-pointer">
              <h6 className="text-xl font-roboto font-black text-black uppercase">
                P.folio
              </h6>
            </a>
          </div>

          {/* Links Section */}
          <div className="items-center font-roboto font-semibold hidden space-x-8 sm:flex lg:flex">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.id)}
                className={`flex text-gray-600 ${
                  link.name === "Themes"
                    ? "font-semibold text-blue-600"
                    : "hover:text-blue-500"
                } cursor-pointer transition-colors duration-300`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
