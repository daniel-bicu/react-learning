import React, { PureComponent } from 'react'

class PureDemo extends PureComponent {
    render() {
        console.log('********PURE COMP********')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureDemo
