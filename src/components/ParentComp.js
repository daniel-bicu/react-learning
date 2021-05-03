import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureDemo from './PureDemo'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Daniel'
        }
    }

    componentDidMount()
    {
        setInterval( () => {
            this.setState({
                name:'Daniel'
            })
        }, 2000)
    }
    
    render() {
        console.log('************** PARENT COMP ************')
        return (
            <div>
                Parent Component
                {/* <RegularComp name = {this.state.name}></RegularComp>
                <PureDemo name = {this.state.name}></PureDemo> */}
                <MemoComp name = {this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
