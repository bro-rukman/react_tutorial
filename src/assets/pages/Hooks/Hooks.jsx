import React,{Component, useState, useEffect} from 'react';
import "./Hooks.css";

// class Hooks extends Component{
//     state={
//         count : 0,
//     }
//     onUpdate=()=>{
//         this.setState({
//             count: this.state.count +1 
//         })
//     }
//     componentDidMount(){
//         document.title=`Title change : ${this.state.count}`;
//     }
//     componentDidUpdate(){
//         document.title=`Title change : ${this.state.count}`;
//     }
//     componentWillUnmount(){
//         document.title=`Homepage`;
//     }
//     render(){
//         console.log('count',this);
//         return(
//             <div className="p-hooks">
//                 <p>Nilai Saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate }>Update Nilai</button>
//             </div>
//         )
//     }
// }
const Hooks =(props)=>{
    const [count, setCount]= useState (0);

    useEffect(()=>{
        document.title=`Title change ${count}`;
        return()=>{
            document.title=`Homepage`;
        }
    })
    return(
        <div className="p-hooks">
                <p>Nilai Saat ini adalah : {count}</p>
                <button onClick={()=>setCount(count+1)}>Update Nilai</button>
            </div>
    )
}
export default Hooks;