import React,{Component} from 'react';




class MenuItem extends Component {
    render(){
        return (
            <div>
            <div>
                <a>
                    <h5>{data.menu.title[0]}</h5>
                </a>
                <a>
                    <h5>{data.menu.title[1]}</h5>
                </a>          
            </div>  
            </div> 
        )
    }
}


export default MenuItem