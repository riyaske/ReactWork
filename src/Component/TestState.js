import React from "react";

class Messages extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Title:"Welcome to Visitor"
        }
    }

    ChangeTiltle()
    {
       this.setState({
        Title:"Thank you for subscription"
       })
    }
    render()
    {
        return (           
            <div>  
                <h2>{this.state.Title}</h2>
                <button onClick={()=>this.ChangeTiltle()}>Subscribe</button>
            </div>      
        )
    }
}

export default Messages