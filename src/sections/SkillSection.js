import React,{Component} from 'react';
import Fullpage from '../components/Fullpage'
import data from "../data.json";
import SkillCard from '../components/SkillCard';


class SkillSection extends Component {
    render(){
        return (
            <div>
            <Fullpage className="third">
                <h3> {data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachSkill => {
                    return (
                            <SkillCard skill={eachSkill} />
                    );
                    })}
                </div>
            </Fullpage>       
            </div>
            
        )
    }
}


export default SkillSection