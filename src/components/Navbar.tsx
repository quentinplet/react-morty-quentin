import { RiHomeLine } from "react-icons/ri";
import { CgStack } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SelectedType = "home" | "episodes" | "episode";

const Navbar = () => {
  const [pageSelected, setPageSelected] = useState<SelectedType>("home");

  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const currentPath = pathnames[1];

  useEffect(() => {
    if (currentPath === "episodes") {
      setPageSelected("episodes");
    } else if (currentPath === "home" || currentPath === "") {
      setPageSelected("home");
    } else {
      setPageSelected("episode");
    }
  }, [currentPath]);

  const navigate = useNavigate();

  const handleClick = (iconClicked: "home" | "episodes") => {
    iconClicked === "home" ? navigate("/") : navigate("/episodes");
  };

  return (
    <div className="absolute w-full top-0 left-0 flex justify-center items-center pt-4">
      <div className="bg-cyanLight w-[168px] h-[57px] rounded-full border-cyanDark border-2 opacity-100 flex items-center justify-evenly">
        <RiHomeLine
          className={`cursor-pointer size-8 hover:text-white hover:opacity-100 transition ${
            pageSelected !== "episodes"
              ? "text-white opacity-100"
              : "text-black opacity-30"
          }`}
          onClick={() => handleClick("home")}
        />
        <CgStack
          className={`cursor-pointer size-8 hover:text-white hover:opacity-100 transition ${
            pageSelected !== "home"
              ? "text-white opacity-100"
              : "text-black opacity-30"
          }`}
          onClick={() => handleClick("episodes")}
        />
      </div>
    </div>
  );
};

export default Navbar;
