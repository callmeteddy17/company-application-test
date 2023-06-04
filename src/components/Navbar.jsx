import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { contact, navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  return (
    <nav
      className={`${styles.paddingX} fixed ${
        color ? 'violet-gradient' : 'bg-opacity-0'
      } w-full flex top-0 z-20 items-center py-5 `}>
      <div className=" w-full flex gap-10 items-center justify-between max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-20 h-20 object-contain " />
        </Link>

        <div className=" hidden xl:flex flex-row ">
          <div className="hidden xl:flex flex-row justify-between gap-16 pr-40">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`${
                  !active === link.title ? 'text-white' : 'text-white'
                } hover:text-white text-xl font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </div>
            ))}
          </div>
          <div className="flex gap-6 ml-20">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full  border border-white bg-opacity-0 px-4 text-black text-left ml-6"
            />
            <div className="flex gap-3 ">
              {contact.map((item, i) => (
                <img
                  src={item.icon}
                  alt="icon"
                  key={i}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`{ ${
              !toggle ? 'flex' : 'hidden'
            } p-6  black-gradient  absolute top-20 rounded-xl -right-10 mx-4 my-2 min-w-[140px] z-10 }`}>
            <ul className="list-none flex flex-col gap-4 justify-end hero-options items-center p-6 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-white'
                  } text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <input
                type="text"
                placeholder="Search"
                className="rounded-full border border-white bg-opacity-0 px-4 text-black text-left mx-6"
              />
              <div className="flex gap-3">
                {contact.map((item, i) => (
                  <img src={item.icon} alt="icon" key={i} />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
