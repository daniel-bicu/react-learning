import React, {Component} from 'react'

class Counter extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count) // is called before the rendered
        // this.setState({
        //     count: this.state.count = this.state.count + 1
        // })

        // if you want to do sth after changing the UI just add a callback to the setState
        //ex

        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log(this.state.count)
        //     }
        // )

        // to Use correctly the setState with start from the prev state
        // also can have a second param of the method, which is props &  it could be used to do dynamic UI.

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count)
        })

    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render()
    {
        return(

            <div>
                <p>Count - {this.state.count}</p>
                <button onClick = {() => this.incrementFive()}> Press me! </button>
            </div>


        )
    }

}

export default Counter