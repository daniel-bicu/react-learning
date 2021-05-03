import React from 'react'

const Hello = () => {
    // JSX 

    // return (
    //     <div>
    //         <h1>Hello! Dan 10!</h1>
    //     </div>
    // )


    // W/o JSX

    return React.createElement( 
    'div',
     null, 
     React.createElement('h1', null, 'Hello, Dan!')
     )
}

export default Hello