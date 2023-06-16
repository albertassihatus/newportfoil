import React, { Component } from "react";
import Slider from "react-slick";
import ttob from '../assets/ttob2.png';
import lets from '../assets/lets.png';
import inteligencia from '../assets/inteligencia.png';
import simoneusa from '../assets/simoneusa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faNode, faPhp, faReact, faShopify, faSymfony, faTypo3, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="svg-test-next-arrow">
    <div
      className={className}
      style={{ ...style,
        position: "absolute",
        top: "20px",
        textalign: "center",
        display: "flex",
        justifycontent: "center",
        alignitems: "center",
        right: "0", }}
      onClick={onClick}
    ><FontAwesomeIcon icon={faCircleRight} /></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="svg-test-next-arrow">
    <div
      className={className}
      style={{ ...style, position: "absolute",
      top: "20px",
      textalign: "center",
      display: "flex",
      justifycontent: "center",
      alignitems: "center",
      right: "100px",  }}
      onClick={onClick}
    ><FontAwesomeIcon icon={faCircleLeft} /></div>
    </div>
  );
}


export default class Projetos extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SampleNextArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <div   className="project-sliders">
        <Slider {...settings}>
          <div>
            <p>The Taste of Brazil</p>
            <div className='tech-icon'>
              <FontAwesomeIcon icon={faSymfony} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#69E4D2",}} /> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faHtml5} size="2xl"style={{color: "#69E4D2",}} /> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCss3} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
            </div>
            <img src={ttob} width="100%" height="auto" alt="" />
            <a href="https://ttobsteakhouse.com" target="_blank"><button>Aplicação</button></a>
          </div>
          <div>
            <p>Let's Gourmet</p>
            <div className='tech-icon'>
              <FontAwesomeIcon icon={faWordpress} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#69E4D2",}} /> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCss3} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
            </div>
            <img src={lets} width="100%" height="auto" alt="" />
            <a href="https://letsgourmetusa.com" target="_blank"><button>Aplicação</button></a>
          </div>
          <div>
            <p>LP Simone Salgado</p>
            <div className='tech-icon'>
              <FontAwesomeIcon icon={faWordpress} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#69E4D2",}} /> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCss3} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
            </div>
            <img src={simoneusa} width="100%" height="auto" alt="" />
            <a href="https://simoneusa.adaptcrewmarketing.com/" target="_blank"><button>Aplicação</button></a>
          </div>
          <div>
            <p>LP Inteligência Emocional</p>
            <div className='tech-icon'>
              <FontAwesomeIcon icon={faWordpress} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#69E4D2",}} /> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCss3} size="2xl"style={{color: "#69E4D2",}} />&nbsp;&nbsp;&nbsp;
            </div>
            <img src={inteligencia} width="100%" height="auto" alt="" />
            <a className="app-btn" href="http://www.institutosimonesalgado.com/inteligenciaemocional/" target="_blank"><button>Aplicação</button></a>
          </div>
        </Slider>
      </div>
    );
  }
}