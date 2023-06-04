import {} from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-center text-4xl font-medium tracking-wider">
          Check what your house can do for you
        </h2>
      </motion.div>

      <div className="mt-20 xs:justify-center flex flex-wrap justify-between  ">
        {technologies.map((item, index) => {
          return (
            <Tilt className="xs:w-[384px] w-full">
              <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full ">
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}>
                  <img src={item.icon} />
                </div>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
