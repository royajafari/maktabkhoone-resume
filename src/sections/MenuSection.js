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
            <div className="menu first">
                <div>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <h5 style={{
                        textDecoration: "underline"
                    }}><a>About</a>  </h5>
                </Link>
                    
                    <button id="app" 
                    onClick={this.handleClick} 
                    >ChangeColor</button>
                    
                <Element name="about" className="element">
                </Element> 
                
                </div>
                
                <div>
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                <h5 style={{
                        textDecoration: "underline"
                    }}><a>Skill</a></h5>  
                </Link>
                <Element name="skill" className="element">
                </Element>  
                </div>
            </div>
            
        )
        
    }
    
}

export default MenuSection
