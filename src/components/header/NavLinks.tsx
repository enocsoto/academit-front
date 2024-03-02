import { Link } from "react-router-dom"
import Javascript from '../../assets/images/Javascript.svg';
import Html from '../../assets/images/Html.svg';
import Node from '../../assets/images/Node-Js.svg';
import React from '../../assets/images/React.svg';
import Github from '../../assets/images/github.svg';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";

export const NavLinks = () => {
  const [heading, setHeading] = useState<string>("")
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (name: string) => {
    if (heading === name) {
      setHeading('');
    } else {
      setHeading(name);
      setIsSubMenuOpen(true);
    }
  };


  const links = [
    {
      name: 'Categorías',
      submenu: true,
      sublinks: [
        {
          Head: 'Cursos',
          sublink: [
            { icon: Javascript, name: 'Javascript', link: '/javascript' },
            { icon: Html, name: 'HTML-CSS', link: '/html-css' },
            { icon: Node, name: 'Node js', link: '/Nodejs' },
            { icon: React, name: 'React js', link: '/React-js' },
            { icon: Github, name: 'GitHub - GitLab', link: '/Github-gitlab' },
          ]
        }
      ]
    },
    {
      name: 'Precios',
      submenu: true,
      sublinks: [
        {
          Head: 'Cursos',
          sublink: [
            { icon: Javascript, name: 'Javascript', link: '/javascript' },
            { icon: Html, name: 'HTML-CSS', link: '/html-css' },
            { icon: Node, name: 'Node js', link: '/Nodejs' },
            { icon: React, name: 'React js', link: '/React-js' },
            { icon: Github, name: 'GitHub - GitLab', link: '/Github-gitlab' },
          ]
        }
      ]
    },
  ]

  return (
    <>
      {links.map((link, index) => (
        <div key={index} onClick={() => handleLinkClick(link.name)}>
          <div className="px-3 text-left md:cursor-pointer group font-lexend hover:text-[#313173] ">
            <span className="flex items-center">
              <h1 className="py-2 justify-between items-center md:pr-0 pr-3">
                {link.name}
              </h1>
              {link.submenu && (
                <>
                {isSubMenuOpen && heading === link.name ? <SlArrowUp className="ml-0 md:ml-2" /> : <SlArrowDown className="ml-0 md:ml-2" />}
                </>
              )}
            </span>
          </div>
          {link.submenu && heading === link.name && isSubMenuOpen && (
            <div className="absolute top-20 border-2 rounded-md block">
              <div className="py-3 bg-white w-auto h-auto px-6 ">
                {link.sublinks.map((sublink, subIndex) => (
                  <div key={subIndex}>
                    <h1 className="text-lg font-semibold font-lexend ">{sublink.Head} </h1>
                    {sublink.sublink.map((link, linkIndex) => (
                      <li key={linkIndex} className="text-sm text-gray-900 my-2.5 flex gap-3">
                        <img src={link?.icon} className="w-7 h-7" alt={link.name} />
                        <Link to={link.link} className="hover:text-[#313173] font-lexend text-LoginText md:text-[16px] ">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
