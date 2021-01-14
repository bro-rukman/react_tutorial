import React,{Component} from 'react';
import "./Hooks.css";

class Hooks extends Component{
    state={
        count : 0,
    }
    onUpdate=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log('count',this);
        return(
            <div className="p-hooks">
                <p>Nilai Saat ini adalah : {this.state.count}</p>
                <button onClick={this.onUpdate }>Update Nilai</button>
                {/* 13.45 video 34 */}
            </div>
        )
    }
}
export default Hooks;