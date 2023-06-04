import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { about } from '../constants';

const Footer = () => {
  return (
    <>
      <div className="xl:flex-row flex-col flex gap-10 overflow-hidden justify-between items-center pt-14">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="rounded-2xl  xl:w-2/6 w-full flex flex-col  items-center xl:block">
          <h2 className="uppercase text-3xl font-semibold ">about</h2>
          <p className="mt-6 text-lg font-semibold w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex gap-20 ">
          {about.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <ul className="mt-6 list-none">
                {item.info.map((info, index) => (
                  <li className=" text-lg cursor-pointer w-full" key={index}>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Footer);
