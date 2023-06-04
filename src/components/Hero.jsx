import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { heroHouse, heroPhone } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="xl:flex-row flex-col flex gap-10 overflow-hidden justify-center items-center pt-20">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="rounded-2xl  flex-1 max-xs:flex max-xs:flex-col ">
          <h1 className="uppercase  text-8xl max-xs:text-5xl">future is now</h1>
          <h2 className="uppercase  font-medium text-6xl max-xs:text-2xl">
            smart home
          </h2>
          <p className="mt-6 text-lg xl:w-80 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <button className=" w-52 h-10 mt-8 bg-opacity-0 rounded-full max-xs:self-center border border-white hover:bg-white hover:text-purple-600">
            See More
          </button>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] ">
          <img src={heroHouse} alt="hero-house-img" />
        </motion.div>
      </div>
      <div className="xl:flex-row-reverse mt-40  flex-col flex gap-10 overflow-hidden justify-center items-center">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="rounded-2xl flex-1">
          <h1 className="uppercase text-5xl">smart home</h1>
          <h2 className="capitalize mt-2 font-normal text-2xl">
            security system
          </h2>
          <p className="mt-6 text-lg w-full">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[850px] ">
          <img src={heroPhone} alt="hero-phone-img" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Hero);
