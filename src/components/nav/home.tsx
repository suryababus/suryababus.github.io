import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return <HomeHeader />;
};

export default Home;
function HomeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 3, type: "spring", bounce: 0.3 }}
      exit={{ opacity: 0, zoom: 10 }}
      className="glass flex flex-col justify-center items-center p-10 overflow-hidden"
    >
      <div>
        <span className="text-white text-8xl tracking-[80px] font-semibold">
          SURYABAB
        </span>
        <span className="text-white text-8xl font-extrabold">U</span>
      </div>
      <div className="h-[1px] w-1/2 bg-gray-300 my-6" />
      <div className="text-white text-xl tracking-[2rem] flex flex-row justify-center items-center">
        <span>SOFTWARE</span>
        <span className="h-12 w-[1px] bg-gray-300 ml-1 mr-10 " />
        <span>TECHNOLOGIST</span>
        <span className="h-12 w-[1px] bg-gray-300 ml-1 mr-10" />
        <span>DEVELOPER</span>
      </div>
    </motion.div>
  );
}
