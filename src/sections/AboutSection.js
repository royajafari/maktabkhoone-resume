import React,{Component} from 'react';
import Fullpage from '../components/Fullpage'
import data from "../data.json";
import './AboutSection.css'
import DownIcon from '../components/DownIcons';
import { Link, Element } from 'react-scroll';

class AboutSection extends Component {
    render(){
        return (
            <div>
                <Fullpage className="second">
                <h3>{data.sections[0].title}</h3>
                <div className="paragraphs">
                    {data.sections[0].items.map( p => {
                    return <p>{p.content}</p>
                    })}
                </div>
            </Fullpage>
            <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
            <DownIcon 
              icon ={data.icons.down}
              style={{
                  color: "black"
              }}
            />
            </Link>
            <Element name="skill" className="element">
            </Element>
            </div>
        )
    }
}


export default AboutSection