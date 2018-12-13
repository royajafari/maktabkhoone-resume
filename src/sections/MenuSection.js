import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Fullpage from '../components/Fullpage'
import data from "../data.json";
import DownIcon from '../components/DownIcons';
import { Link, Element } from 'react-scroll'; 
import './MenuSection.css'




class MenuSection extends Component {
      handleClick = () => {
        var letters = '0123456789ABCDEF';
        var colory = '#';
        for (var i = 0; i < 6; i++ ) {
            colory += letters[Math.floor(Math.random() * 16)];
          }
          this.setState({bgcolor: colory});
          ReactDOM.render(<MenuSection />, document.getElementById('app'));
          
      }

    render(){
        return (
              <div className="first">

              <ul>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0} onSetActive={this.handleSetActive}>
                        <a href="#" style={{
                    color: 'white'
                }}>About</a>
                        </Link>                                                                    
                        <Element name="about" className="element">
                        </Element>    
                </li>
                <li>
                    <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                        <a href="#"  style={{
                    color: 'white'
                }}>Skill</a>  
                    </Link>
                    <Element name="skill" className="element">
                    </Element> 
                </li>
                <li>
                <button id="app" 
                            onClick={this.handleClick} 
                    >ChangeColor
                </button>
                </li>
              </ul>
              </div>
          
        )
        
    }
    
}

export default MenuSection
