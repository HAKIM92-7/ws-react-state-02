import React , {useState , useEffect} from 'react'

const FunctionnalCounter = () => {

    const [count ,setCount ] = useState(0) ;
    const [inputValue , setIheb] = useState("") ;

    const [time , setTime] = useState ("") ;


    useEffect(() => {
    
    setInterval(()=> {

    let date = new Date() ; 

    setTime(`${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}:${date.getMilliseconds().toString()} `) ;


    },999.225)
    


    }, [])

    // useEffect(() => {


    //     alert('count is updated !')
      
    // }, [count])

    // useEffect(() => {

    //     alert('input is updated !') 
       
    // }, [inputValue])



    return (
        <div>

            <p>{time}</p> <br/>

        <input type="text" placeholder="enter a message"  onChange={(e)=> setIheb(e.target.value)}/> <br/>

        <p>{inputValue}</p>



        <button className="btn btn-success"  onClick={()=> setCount(count+1)}>+</button>
        <span style={{margin:"20px"}}>{count}</span>
        <button className={count === 0 ? "btn btn-warning" : "btn btn-danger"} onClick={()=> count>0 ?  setCount(count-1) :alert('stop !')}>-</button>
        
        </div>
    )
}

export default FunctionnalCounter
