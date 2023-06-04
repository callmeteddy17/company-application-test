import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { aboutus, bigPhone, heroPhone, heroPhone2 } from '../assets';

const About = () => {
  return (
    <>
      <div className="xl:flex-row-reverse flex-col flex gap-10 overflow-hidden justify-between items-center pt-14">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="rounded-2xl  xl:w-3/6 w-full flex flex-col  items-center xl:block">
          <h1 className="uppercase text-center text-7xl max-xs:text-4xl">
            smart home
          </h1>
          <p className="mt-6 text-lg w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className=" w-52 h-10 mt-8 bg-opacity-0 rounded-full border border-white hover:bg-white hover:text-purple-600">
            Read More
          </button>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className=" xl:h-auto md:h-[550px] ">
          <img src={heroPhone2} alt="hero-house-img" />
        </motion.div>
      </div>
      <div className="xl:flex-row mt-40  flex-col flex gap-10 overflow-hidden justify-center items-center">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="rounded-2xl flex-1">
          <h1 className="uppercase xl:text-5xl max-xs:text-center tracking-widest text-3xl">
            monitor home remotely
          </h1>

          <ul className="mt-16 text-lg w-full ">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </li>
            <br />
            <li>incididunt ut labore et dolore magna aliqua. </li>
            <br />
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </li>
            <br />
            <li>
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center mt-10">
            <i className="text-3xl font-bold">S e r v i c e</i>
            <i className="text-5xl font-bold">0 1 2 3 4 5</i>
            <div className="mt-14 flex flex-col">
              <p className="font-light uppercase text-center text-2xl">
                download available on
              </p>
              <div className="mt-10 flex gap-12 flex-col items-center md:flex-row ">
                <button className="h-14 w-44 border border-white hover:bg-white hover:text-purple-700">
                  IOS
                </button>
                <button className="h-14 w-44 border border-white hover:bg-white hover:text-purple-700">
                  Android
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 relative flex flex-col items-center">
          <img src={bigPhone} alt="hero-phone-img" />
          <button className="relative md:bottom-56 rounded-full border border-white md:w-64 md:h-12 sm:bottom-48 sm:w-52 sm:h-12 w-40 h-8 bottom-32">
            <p className="md:text-xl ">Download Now</p>
          </button>
        </motion.div>
      </div>
      <div className="xl:flex-row-reverse flex-col flex gap-10 overflow-hidden justify-between items-center pt-14">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="rounded-2xl  xl:w-3/6 w-full flex flex-col  items-center xl:block">
          <h2 className="uppercase xl:text-5xl max-xs:text-center font-medium tracking-widest text-3xl">
            about us
          </h2>
          <p className="mt-20 text-lg w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <div className="mt-16">
            <div className="flex gap-5 m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="33px"
                height="28px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M27.177,13.344 C26.612,13.344 26.155,12.907 26.155,12.366 C26.155,9.589 25.26,6.978 22.977,5.15 C20.928,3.51 18.203,1.970 15.306,1.970 C14.741,1.970 14.284,1.532 14.284,0.991 C14.284,0.451 14.741,0.12 15.306,0.12 C18.749,0.12 21.987,1.298 24.422,3.630 C26.857,5.964 28.198,9.66 28.198,12.366 C28.198,12.907 27.741,13.344 27.177,13.344 ZM20.220,12.366 C20.219,9.770 18.15,7.658 15.306,7.658 C14.741,7.658 14.284,7.219 14.284,6.679 C14.284,6.137 14.741,5.700 15.306,5.700 C19.142,5.701 22.262,8.691 22.263,12.366 C22.263,12.907 21.805,13.344 21.242,13.344 C20.677,13.345 20.220,12.907 20.220,12.366 ZM9.265,13.210 C8.800,13.515 8.164,13.400 7.846,12.953 C7.528,12.507 7.647,11.899 8.113,11.593 C8.770,11.164 8.874,10.969 8.860,10.694 C8.757,9.856 6.205,6.520 5.404,6.185 C5.171,6.102 4.941,6.105 4.660,6.195 C3.576,6.545 2.813,7.125 2.456,7.872 C2.117,8.581 2.148,9.451 2.545,10.388 C4.29,13.877 6.100,16.926 8.700,19.451 C8.701,19.452 8.701,19.453 8.703,19.454 C11.340,21.950 14.526,23.937 18.174,25.362 C19.151,25.743 20.58,25.772 20.799,25.446 C21.579,25.104 22.184,24.374 22.550,23.335 C22.643,23.66 22.647,22.845 22.559,22.620 C22.210,21.855 18.728,19.410 17.844,19.311 C17.568,19.298 17.364,19.397 16.915,20.27 C16.596,20.473 15.961,20.588 15.494,20.282 C15.29,19.977 14.910,19.368 15.228,18.921 C15.609,18.389 16.402,17.279 17.959,17.356 C19.594,17.442 23.916,20.484 24.476,21.941 C24.725,22.584 24.729,23.264 24.486,23.957 C23.936,25.523 22.955,26.653 21.650,27.227 C21.37,27.496 20.375,27.630 19.684,27.630 C18.950,27.630 18.182,27.479 17.403,27.175 C13.510,25.655 10.105,23.530 7.279,20.857 C7.271,20.851 7.265,20.844 7.258,20.837 C4.464,18.128 2.241,14.860 0.653,11.126 C0.37,9.676 0.19,8.269 0.599,7.56 C1.197,5.806 2.377,4.867 4.9,4.340 C4.735,4.106 5.445,4.110 6.119,4.351 C7.637,4.886 10.811,9.27 10.900,10.590 C10.980,12.88 9.822,12.846 9.265,13.210 Z"
                />
              </svg>
              <p>+ 012 34567890</p>
            </div>
            <div className="flex gap-5 m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="33px"
                height="23px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M29.944,22.56 L3.350,22.56 C1.666,22.56 0.298,20.753 0.298,19.151 L0.298,3.787 C0.298,2.185 1.666,0.882 3.350,0.882 L29.944,0.882 C31.627,0.882 32.996,2.185 32.996,3.787 L32.996,19.151 C32.996,20.753 31.627,22.56 29.944,22.56 ZM30.961,3.787 C30.961,3.253 30.505,2.819 29.944,2.819 L3.350,2.819 C2.789,2.819 2.332,3.253 2.332,3.787 L2.332,19.151 C2.332,19.684 2.789,20.119 3.350,20.119 L29.944,20.119 C30.505,20.119 30.961,19.684 30.961,19.151 L30.961,3.787 ZM17.321,15.895 C17.129,16.56 16.888,16.137 16.648,16.137 C16.408,16.137 16.167,16.56 15.975,15.895 L4.712,6.450 C4.290,6.96 4.250,5.485 4.621,5.83 C4.992,4.682 5.635,4.643 6.57,4.996 L16.648,13.878 L27.237,4.997 C27.658,4.644 28.301,4.682 28.673,5.83 C29.44,5.485 29.3,6.96 28.582,6.450 L17.321,15.895 Z"
                />
              </svg>
              <p>dtd172000@gmail.com</p>
            </div>
            <div className="flex gap-5 m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="33px"
                height="29px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M17.56,24.129 C14.444,27.85 11.854,28.761 11.746,28.831 C11.578,28.938 11.387,28.991 11.196,28.991 C11.5,28.991 10.813,28.938 10.646,28.831 C10.537,28.761 7.949,27.85 5.336,24.128 C1.839,20.169 0.9,15.787 0.9,11.454 C0.9,5.390 5.17,0.457 11.196,0.457 C17.375,0.457 22.402,5.390 22.402,11.454 C22.402,15.787 20.554,20.169 17.56,24.129 ZM11.196,2.429 C6.125,2.429 1.999,6.477 1.999,11.454 C1.999,19.489 9.135,25.289 11.196,26.796 C13.256,25.289 20.393,19.489 20.393,11.454 C20.393,6.477 16.267,2.429 11.196,2.429 ZM11.196,15.816 C8.744,15.816 6.749,13.858 6.749,11.452 C6.749,9.46 8.744,7.87 11.196,7.87 C13.649,7.87 15.644,9.46 15.644,11.452 C15.644,13.858 13.649,15.816 11.196,15.816 ZM11.196,9.59 C9.852,9.59 8.758,10.133 8.758,11.452 C8.758,12.772 9.852,13.844 11.196,13.844 C12.541,13.844 13.635,12.772 13.635,11.452 C13.635,10.133 12.541,9.59 11.196,9.59 Z"
                />
              </svg>
              <p>Ho Chi Minh city, Viet Nam</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className=" xl:h-auto ">
          <img src={aboutus} alt="hero-house-img" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
