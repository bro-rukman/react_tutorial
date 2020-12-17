import React,{ Component, createContext} from 'react';
const RootContext=createContext();
// Provider
const Provider =RootContext.Provider;
const GlobalProvider =(Children)=>{
    return(
        class Parent extends Component{
            // 
        }
    )
}
export default GlobalProvider;
// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer=(Children)=>{
    return(
        class ParentConsumer extends Component{
            render(){
                return(
                    <Consumer>
            {
                value=>{
                    return(
                        <Children {...this.props} {...value}/>
                    )
                }
            }
        </Consumer>
                )
            }
        }
        
    )
}

// class Context extends Component{

// }
// export default Context;