import React from  'react'

function Greet(props)
{
    console.log(props)
    const {name}=props;
    return <h1>Hello dat {name}</h1>;    
}

export default Greet