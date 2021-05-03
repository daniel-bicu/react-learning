import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        let message
        // if(this.state.isLoggedIn)
        //     message = <div> Welcome Dan</div>
        // else message = <div>Welcome Guest!</div>

        //or
        // message = this.state.isLoggedIn? <div>Welcome Dan</div> : <div>Welcome Guest!</div>
        
        //or
        // if (this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Dan!</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest!</div>
        //     )
        // }

        return (
            // ternary operator
            // this.state.isLoggedIn? (
            // <div>Welcome Dani!</div>) :(
            // <div>Welcome Guest!</div>
            // ) 
            //or
            this.state.isLoggedIn && <div>Welcome Dan</div>
        )
    }
}

export default UserGreeting
