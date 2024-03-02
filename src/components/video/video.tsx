import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BiCheckDouble } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
interface Curso {
  curso: string;
  modulos: Modulo[];
}

interface Modulo {
  titulo: string;
  clases: string[];
}

interface VideoProps {
  src: string;
}

const cursoJavascript:Curso = {
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        setVideoDuration(videoRef.current!.duration);
      });
    }
  }, []);
  
  const [leccionesVisibles, setLeccionesVisibles] = useState<boolean[]>(
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
    <div className="justify-center mx-6">
      <h2 className="text-2xl 
        font-lexend 
        dark:text-white 
        pb-2
        text-black">{cursoJavascript.curso}</h2>
      <div className="flex items-start flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3  pb-3">
          {/* Video configuration */}
            <video
              ref={videoRef}
              className="w-full h-full aspect-video rounded-md"
              src={src}
              title="Video"
              controls
            ></video>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 lg:pl-4 pb-4">
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
                            <div className="pl-2 pt-2 font-lexend">
                              <div className="flex gap-2 items-center">
                                  <BiCheckDouble className="text-black size-7" />Clase {leccionIndex + 1}
                              </div>
                              <div className="flex gap-2 items-center">
                              <TbMinusVertical className="text-black size-7" />
                              <p className='w-full' key={leccionIndex}>{leccionIndex + 1}- {leccion}</p>
                              {videoDuration > 0 && (
                                <p className='text-right'>{(videoDuration / 60).toFixed(0)} min</p>
                              )}
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
    </div>
  );

}
