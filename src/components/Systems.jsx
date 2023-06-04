import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { tech } from '../constants';

const SystemsCard = ({ index, name, infomation, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="px-3 xs:w-[320px] flex flex-col items-center justify-center  w-full">
    <div className="h-[180px] flex flex-col-reverse mb-10">
      <img src={image} alt="tech" />
    </div>

    <p className="text-white font-black text-center text-[30px]">{name}</p>
    <div className="my-5">
      <p className="text-white tracking-wider text-[18px]">{infomation}</p>
    </div>
  </motion.div>
);

const Systems = () => {
  return (
    <div className="mt-12 hero-options border border-white rounded-[36px]">
      <div
        className={`${styles.paddingX}  py-10 justify-center flex flex-wrap gap-6`}>
        {tech.map((tech, index) => (
          <SystemsCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Systems);
