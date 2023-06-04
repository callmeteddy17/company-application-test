import {} from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, sub }) => {
  return (
    <Tilt className="xs:w-[320px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="py-5 rounded-[20px] security-gradient flex flex-col justify-evenly min-h-[280px] px-4 items-center">
          <img src={icon} alt={title} className="w-full object-contain h-72" />

          <h1 className="mt-6 text-3xl uppercase text-center">{title}</h1>
          <p className="m-5 text-base">{sub}</p>
          <button className="w-52 h-10 m-8 bg-opacity-0 rounded-full border border-white hover:bg-white hover:text-purple-600">
            See More
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Security = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-center text-5xl font-semibold uppercase">
          security mode type
        </h2>
      </motion.div>

      <div className="mt-20 xs:justify-center flex flex-wrap justify-between gap-14 ">
        {services.map((service, index) => {
          return <ServiceCard key={index} index={index} {...service} />;
        })}
      </div>

      <motion.div variants={textVariant()}>
        <p className="mt-28 text-lg font-thin text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Security);
