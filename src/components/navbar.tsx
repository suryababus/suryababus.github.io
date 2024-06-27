import { FunctionComponent } from "react";

export type Navigation = {
  name: string;
  path: string;
};

export const navigationRoutes: Navigation[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

interface NavbarProps {
  onChange: (nav: Navigation) => void;
  current: Navigation;
}

const Navbar: FunctionComponent<NavbarProps> = ({ current, onChange }) => {
  return (
    <div className="absolute flex flex-row bottom-28 text-white text-xl gap-24 z-20 w-full justify-center items-center">
      <div className="flex flex-row gap-5 bg-black/90 py-4 px-10 rounded-2xl">
        {navigationRoutes.map((nav) => {
          return (
            <div
              className={`px-4 py-2 hover:cursor-pointer hover:glass  ${
                nav.name === current.name ? "glass" : ""
              }`}
              onClick={() => onChange(nav)}
            >
              {nav.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
