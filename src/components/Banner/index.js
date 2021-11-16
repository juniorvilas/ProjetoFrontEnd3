import './style.scss';
import Junior from '../../img/junior.png';


const Banner = () => {
    return (
           <section id="banner-bg">
            <div className="banner-jr">
                <div className="banner-img">
                    <a href="https://www.linkedin.com/in/carlindo-junior-556371197/">
                        <img src={Junior} alt="Imagem Junior"/>
                    </a>                    
                </div>                
                <div className="banner-texto">
                    <h2>Sobre mim</h2>
                    <p>Atualmente em mudança de área desde do começo de Janeiro de 2021 estudando programação e em Maio de 2021 iniciei o curso Certified Tech Developer para ser Full Stack Jr com a Digital House!</p>
                </div>
                
            </div>           
           </section>
    )
}

export default Banner;