import { Link } from "react-router-dom"
import Javascript from '../../assets/images/Javascript.svg';
import Html from '../../assets/images/Html.svg';
import Node from '../../assets/images/Node-Js.svg';
import React from '../../assets/images/React.svg';
import Github from '../../assets/images/github.svg';
export const NavLinks = () => {

  const links = [
    {
      name: 'Categorías', submenu: true, sublinks: [
        {
          Head: 'Cursos',
          sublink: [
            { icon: Javascript, name: 'javascript', link: '/javascript' },
            { icon: Html, name: 'HTML-CSS', link: '/html-css' },
            { icon: Node, name: 'Node.js', link: '/Nodejs' },
            { icon: React, name: 'React js', link: '/React-js' },
            { icon: Github, name: 'GitHub - GitLab', link: '/Github-gitlab' },
          ]
        }
      ]
    },
    {
      name: 'Precios', submenu: true, sublinks: [
        {
          Head: 'Cursos',
          sublink: [
            { icon: Javascript, name: 'javascript', link: '/javascript' },
            { icon: Html, name: 'HTML-CSS', link: '/html-css' },
            { icon: Node, name: 'Node.js', link: '/Nodejs' },
            { icon: React, name: 'React js', link: '/React-js' },
            { icon: Github, name: 'GitHub - GitLab', link: '/Github-gitlab' },
          ]
        }
      ]
    },
    { name: 'Contáctanos' },
  ]
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group" key={link.name}>
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:block hover:block">
                <div className="py-3 bg-white ">
                  {link.sublinks.map((sublink, subIndex) => (
                    <div key={subIndex}>
                      <h1 className="text-lg font-semibold font-lexend ">{sublink.Head}</h1>
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
        </div>
      ))}
    </>
  )
}

{/* <Link to='/contact'> */ }
{/* <Link to='/price'> */ }

