import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello!"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: "GoodBye!"
    //     })
    // }

    clickHandler = () =>{
        this.setState({
            message: "Good bye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1. Bind directly, but for each update--> rerender = PERFORMANCE -- */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}

                {/* 2. You can pass an arrow function as the event Handler! PERFORMANCE -- */}
                {/* <button onClick={ () => this.clickHandler()}> Click </button> */}

                {/* 3. Bind ONCE in the CONSTRUCTOR! */}
                {/* <button onClick={this.clickHandler}> Click </button> */}

                {/* 4. Use an arrow function as the class property (i.e. as define the method as an arrow function!) */}
                <button onClick={this.clickHandler}> Click </button>
           
            </div>
        )
    }
}

export default EventBind
