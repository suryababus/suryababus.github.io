import { FunctionComponent, useState } from "react";
import Home from "./nav/home";
import BackgroundParticles from "./background";
import Navbar, { Navigation, navigationRoutes } from "./navbar";
import Work from "./nav/work";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

interface AppProps {}

const routeMap: Record<string, FunctionComponent> = {
  "/": Home,
  "/work": Work,
  "/projects": Home,
  "/contact": Home,
};

const App: FunctionComponent<AppProps> = () => {
  const [currentRoute, setRoute] = useState<Navigation>(navigationRoutes[1]);

  const onRouteChange = (naviagation: Navigation) => {
    setRoute(naviagation);
  };
  const Component = routeMap?.[currentRoute.path] ?? Home;
  return (
    <div className=" h-screen w-screen ">
      <div
        className=" h-screen w-screen absolute bg-black"
        // style={{
        //   backgroundImage: `url("/public/bg.jpg")`,
        //   backgroundSize: "cover",
        //   filter: "blur(2px)",
        // }}
      />
      <motion.div
        layout
        className=" absolute h-screen w-screen top-0 left-0 flex flex-col justify-center items-center z-10 text-center overflow-scroll"
      >
        {currentRoute.path === "/work" ? (
          <Work key={"work"} />
        ) : (
          <Home key={"home"} />
        )}
      </motion.div>
      {/* <BackgroundParticles /> */}
      <Navbar onChange={onRouteChange} current={currentRoute} />
    </div>
  );
};

export default App;
