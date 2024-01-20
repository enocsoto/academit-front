import fondo from '../assets/images/FONDO.svg'
export const MainArticle = () => {
    return (
        <>
            <section className=''>
                <picture className=''>
                    <source media="(max-width: 640px)" srcSet={fondo} />
                    <source media="(min-width: 641px)" srcSet={fondo} />
                    <img src={fondo} alt="Article" className='object-cover h-auto w-full' />
                </picture>
            </section>

            <article className='text-wrap over:text-balance align-middle '>
                <h2 className="font-lexend font-semibold text-center sm:text-[40px] text-[30px] items-center p-4">Cursos con clases en vivo, al precio más accesible</h2>
                <p className="font-lexend font-semibold text-center sm:text-[20px] text-[16px] items-center p-4">Conoce nuestros cursos con clases en vivo, junto con profesores expertos de la industria.</p>
            </article>
        </>
    )
}
