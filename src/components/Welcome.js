import React from 'react'
import {Component} from 'react'

class Welcome extends Component
{
    render()
    {   // destructuring props
        const {name, heroName} = this.props
        // or state

        const {state1, state2, state3} = this.state
        // and use after that state1 instead of this.state.state1 etc...

        return (
            
            <div>
                <h1> Welcome {name} a.k.a {heroName}</h1>
                {this.props.children}
            </div>
       
        )
    }
}

export default Welcome