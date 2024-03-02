import React from "react";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BiCheckDouble } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
const cursoJavascript = {
  "curso": "Curso de JavaScript Básico [2023]",
  "modulos": [
    {
      "titulo": "Módulo 1: Principios Básicos",
      "clases": [
        "Qué es JavaScript",
        "Variables y tipos de datos",
      ]
    },
    {
      "titulo": "Módulo 2: Variables en Javascript",
      "clases": [
        "¿Qué es una variable?",
        "Formas de nombrar variables",
        "var vs let vs const",
        "Tipos de datos",
        "Tipos de datos parte 2",
      ]
    },
    {
      "titulo": "Módulo 3: Funciones y objetos",
      "clases": [
        "Funciones",
        "Objetos"
      ]
    }
  ]
}
interface VideoProps {
  src: string;
}
export const Video: React.FC<VideoProps> = ({ src }) => {

  const [leccionesVisibles, setLeccionesVisibles] = useState(
    cursoJavascript.modulos.map(() => false)
  );

  const toggleLecciones = (index: number) => {
    setLeccionesVisibles(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }
  return (
    <>
      <h2 className="text-2xl 
        font-lexend 
        dark:text-white 
        pl-2 pt-4 
        text-black">{cursoJavascript.curso}</h2>
      <div className="flex flex-wrap justify-start">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-2">
          {/* Video configuration */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full aspect-video rounded-md"
              src={src}
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          {/* Aside */}
          <div className=" dark:text-white text-black font-lexend">
            <table className="w-full">
              <thead className="border-2 border-gray-300 p-2">
                <tr className="">
                  <th className="md:font-lexend md:text-xl font-normal text-left p-2 dark:text-white text-black md:w-full">Contenido del curso</th>
                </tr>
              </thead>
              <tbody className="border-2 border-gray-300 pt-20">
                {cursoJavascript.modulos.map((modulo, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-2 border-gray-300">
                      <td className="flex items-center gap-2 place-content-between md:font-lexend font-normal text-base p-2">
                        <div className="p-1 ">
                          {modulo.titulo}
                          <p className="md:text-[12px] font-lexend">{modulo.clases.length} Clases | 1 h 6 min</p>
                        </div>
                        <div onClick={() => toggleLecciones(index)}>
                          <SlArrowDown className="cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                    {leccionesVisibles[index] && (
                      <tr className="border-2 border-gray-300">
                        <td>
                          {modulo.clases.map((leccion, leccionIndex) => (
                            <div className="p-3 font-lexend">
                              <div className="flex gap-2 items-center">
                                  <BiCheckDouble className="text-black size-7" />Clase {leccionIndex + 1}
                              </div>
                              <div className="flex gap-2 items-center">
                              <TbMinusVertical className="text-black size-7" />
                              <p className='' key={leccionIndex}>{leccionIndex + 1}- {leccion}</p>
                              </div>
                            </div>
                          ))}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

}
