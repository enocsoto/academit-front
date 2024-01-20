import section1 from '../../assets/images/section1.svg'
import section2 from '../../assets/images/section2.svg'
export const Sections = () => {
    return (
        <>
            <section className="bg-white">
                <div className="max-w-5xl px-6 py-16 mx-auto">
                    <div className="items-center md:flex md:space-x-6">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800 font-lexend sm:text-[26px]">Formate como un experto en el Backend</h3>
                            <p className="max-w-md mt-4 mb-4 font-lexend sm:text-[20px] text-gray-600">Hemos diseñado un roadmap perfecto para potenciar tus capacidades al máximo. Encontrarás una serie de cursos cuidadosamente escogidos para que obtengas el conocimiento y las técnicas completas para ser el mejor desarrollador backend.</p>
                            <a href="#" className="mt-8 border-2 border-[#313173] rounded-md p-2 font-semibold font-lexend text-[#313173] lg:text-[20px] hover:text-white hover:bg-[#313173]">Seguir Roadmap</a>
                        </div>

                        <div className="mt-8 md:mt-0 md:w-1/2">
                            <div className="flex items-center justify-center">
                                <div className="max-w-md">
                                    <img className="object-cover object-center w-full rounded-md shadow h-500px"
                                        src={section1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-5xl px-6 py-16 mx-auto">
                    <div className="items-center md:flex md:space-x-6">
                        <div className="md:w-1/2">
                            <div className="flex items-center justify-center">
                                <div className="max-w-md">
                                    <img className="object-cover object-center w-full rounded-md shadow h-500px"
                                        src={section2} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0 md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800 font-lexend sm:text-[26px]">Formate como un experto en el Frontend</h3>
                            <p className="max-w-md mt-4 mb-4 text-gray-600 font-lexend sm:text-[20px]">Si tienes pasión por el diseño y la programación y quieres construir los sitios y aplicaciones web más novedosos y a la vanguardia; tenemos el roadmap perfecto para ti. Encontrarás una serie de cursos con las últimas tecnologías y frameworks para programar fantásticos frontend.</p>
                            <a href="#" className="mt-8 border-2 border-[#313173] rounded-md p-2 
                    font-semibold font-lexend text-[#313173] lg:text-[20px]
                    hover:text-white hover:bg-[#313173]">Seguir Roadmap</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
