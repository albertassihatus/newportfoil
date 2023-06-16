import './App.css'
import './styles/desktop.css'
import './styles/mobile.css'
import Header  from './components/Header.jsx'
import ContactForm from './components/ContactForm'
import certification from './assets/certification.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faNode, faPhp, faReact, faShopify, faSymfony, faWhatsapp, faWordpress } from '@fortawesome/free-brands-svg-icons'
import Projetos from './components/Projetos'
import Footer from './components/Footer'

function App() {

  return (
    <body>
      <Header/>
      <section className='wrapper'>
        <div className='bg-filter'>
          <div className="photo-bg"></div>
        </div>
        <div className='indexContainer'></div>
        <div className='section-box'>
          <div>
            <section>
              <div>
                <h1>Hatus Albertassi</h1>
                <h3>FULL STACK DEVELOPER</h3>
                <p className='about-p'>Olá! Sou desenvolvedor web. Tenho experiência em design e construção de sites, também sou bom em wordpress. Eu adoraria conversar com você.</p> 
                <div className='about-social' id="about">               
                  <button><a href="https://wa.me/5524999252710" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faWhatsapp} style={{color: "#69E4D2",}} /></div></a></button>
                  <button><a href="https://www.linkedin.com/in/hatusalbertassi/" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faLinkedin} style={{color: "#69E4D2",}} /></div></a></button>
                  <button><a href="https://github.com/albertassihatus" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faGithub} style={{color: "#69E4D2",}} /></div></a></button>
                </div>
              </div>
            </section>
            <hr></hr>
            <section>
              <h2>Sobre Mim</h2>
              <h3>MINHA HISTÓRIA</h3>
              <p>Desde cedo, desenvolvi uma paixão pela tecnologia e uma fascinação por explorar o mundo das linguagens de programação. Sempre movido pela curiosidade em entender o funcionamento por trás de tudo, mergulhei de cabeça na busca pelo conhecimento nesses campos. Minha jornada tem sido marcada pelo desejo constante de compreender como as coisas realmente funcionam e aplicar esse conhecimento para criar soluções inovadoras e impactantes. Através dessa paixão, estou constantemente aprimorando minhas habilidades e explorando novas possibilidades no vasto e emocionante universo da tecnologia.</p>
              <div id="resume">
                <ul className='about-list'>
                <li>IDADE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>30</span></li>
                <li>PHONE:&nbsp;&nbsp;&nbsp;<span>+55 24 99925-2710</span></li>
                <li>EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>hatus.albertassi@gmail.com</span></li>
                </ul>
              </div>
            </section>
            <hr></hr>
            <section>
              <div>
                <h2>Serviços</h2>
                <h3>O QUE EU FAÇO</h3>
                <div>
                  <div className='service-do'>
                    <div className='service-col'>
                      <div className='service-icon'><FontAwesomeIcon icon={faCode} style={{color: "#69E4D2",}} /></div>
                      <div className='service-title'>Web Development</div>
                      <div className='service-p'>Experiência sólida no desenvolvimento e manutenção de websites, com foco em JavaScript, CSS e HTML. Proficiente em WordPress, personalizando temas para atender às necessidades dos clientes. Habilidade em TWIG para agilizar o desenvolvimento. Conhecimento em Shopify para criação de lojas virtuais. Experiência em garantir responsividade e compatibilidade entre navegadores, priorizando uma experiência de usuário excepcional.</div>
                    </div>
                    {/* <div>
                      <div className='service-icon'><FontAwesomeIcon icon={faGamepad} style={{color: "#69E4D2",}}/></div>
                      <div className='service-title'>Game Development</div>
                      <div className='service-p'>The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
            <hr></hr>
            <section>
              <h2>Experiência</h2>
              <h3>TRABALHANDO COM</h3>
              <div className='working'>
                <h3>Adapt Crew<span> ~ Present </span></h3>
                <p>Desenvolvimento e manutenção de websites, aplicando conhecimentos em JavaScript, CSS e HTML para criar interfaces interativas e atraentes.</p>
              </div>
            </section>
            <hr></hr>
            <section>
              <h2>Educação</h2>
              <h3>ESTUDEI EM</h3>
              <div className='working'>
                <h3>Trybe<span> ~ 2022/2023 </span></h3>
                <p>Fundamentos de Desenvolvimento Web, Desenvolvimento Front-end, Desenvolvimento Back-end, Ciência da Computação, Engenharia de Software, Metodologias Ágeis e habilidades comportamentais.</p>
                <br></br>
                <h3>Universidade Geraldo Di Biase <span> ~ 2015/2019 </span></h3>
                <p>Bacharelado em Engenharia de Produção.</p>
              </div>
            </section>
            <hr></hr>
            <section>
              <h2>Idiomas</h2>
              <h3>ESCRITA E LEITURA</h3>
              <div>
                <ul className='about-list'>
                <li>PORTUGUÊS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Nativo</span></li>
                <li>INGLÊS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Avançado</span></li>
                <li>Francês:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Básico</span></li>
                </ul>
              </div>
            </section>
            <hr></hr>
            <section>
              <h2>Tecnologias</h2>
              <h3>O QUE EU USO</h3>
              <div className='tech-container'>
                <div id="portfoil">
                  <div className='tech-icon'><FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>JavaScript</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faReact}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>React.js</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faHtml5} size="2xl"style={{color: "#69E4D2",}} /></div>
                  <p>HTML</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faCss3}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>CSS</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faWordpress} size="2xl"style={{color: "#69E4D2",}} /></div>
                  <p>Wordpress</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faNode} size="2xl"style={{color: "#69E4D2",}} /></div>
                  <p>Node.js</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faShopify}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>Shopify</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faSymfony}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>Symfony</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faDatabase}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>MySQL</p>
                </div>
                <div>
                  <div className='tech-icon'><FontAwesomeIcon icon={faPhp}size="2xl" style={{color: "#69E4D2",}} /></div>
                  <p>PHP</p>
                </div>
              </div>
            </section>
            <hr></hr>
            <section>
            <h2>Projetos</h2>
            <h3>ÚLTIMOS TRABALHOS</h3>
            <Projetos />
            </section>
            <hr></hr>
            <section>
              <h2>Certificados</h2>
              <div className='certificados'>
                <a href="https://www.credential.net/bcf29edb-1fb3-4cc0-a6f2-cabcdb5693fc#gs.0k2i0q" target='_blank'><img src={certification} width="50%" height="auto" alt="" /></a>
              </div>
            </section>
            <hr></hr>
            <ContactForm />
          </div>
        </div>
        <div className='wapp-icon'><a href="https://wa.me/5524999252710" target='_blank'><FontAwesomeIcon icon={faWhatsapp}size="2xl" style={{color: "#3dff5d",}} /></a></div>
      <Footer />
      </section>
    </body>
  )
}

export default App
