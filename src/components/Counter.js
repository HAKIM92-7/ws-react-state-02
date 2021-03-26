import React, { Component } from 'react'

export default class Counter extends Component {

constructor(props) {

super(props);

this.state={
count : 0 ,
message : "" 


}


}

componentDidMount(){

console.log('component is mounted')
}

componentDidUpdate() {

console.log('component updated !')

}

componentWillUnmount(){
    console.log('component is dead !');
}



increment =() => this.setState ({count : this.state.count +1}) ;

decrement() { 
    
this.setState({count : this.state.count -1});


}

    render() {
        return (
            <div style={{marginTop:"50px"}}>

                

                
                <h1 style={{marginBottom : "30px"}}>{this.props.title}</h1>

                <div style={{marginBottom:"30px"}}>
                <button type="button" className="btn btn-success" style={{width:"50px" }} onClick={
            
                ()=> this.increment()



                }>+</button>
                <span style={{margin:"20px 30px"}}>{this.state.count}</span>
                <button type="button" className="btn btn-danger" style={{width:"50px"}} onClick={

                ()=> this.state.count>0 ? this.decrement() : alert('stop ! ')



                } >-</button> 
                </div><br/>

               <input type="text"  onChange={(e) => {
                   
                this.setState({message : e.target.value }) ;
                // console.log(e) ;
            
            
            
            
            }}/>

            <p>{this.state.message}</p>
            </div>
        )
    }
}
