import './style.scss';
import Junior from '../../img/junior.png';


const Banner = () => {
    return (
            <>
                <section id="banner-bg">
                    <div className="banner-jr">
                        <div className="banner-img">
                            <a href="https://www.linkedin.com/in/carlindo-junior-556371197/">
                                <img src={Junior} alt="Imagem Junior"/>
                            </a>                    
                        </div>

                        <div className="banner-texto">                           
                                <h2>Sobre mim</h2>
                                <p className="about-me">
                                    Sou <b>Desenvolvedor Front-End</b>, construindo projetos com Javascript/(React,Next, TypeScript, React Query, Styled Components).
                                    Venho da área de logística, porém com mais de 2 anos de experiência no desenvolvimento de aplicações web.
                                    Tenho um olhar aguçado para negócios, novas metodologias.
                                    Vamos conversar!
                                </p>
                                
                        </div>
                    </div>           
                </section>
           </>
    )
}

export default Banner;
