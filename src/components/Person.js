import React from 'react'

function Person({person}) {
    return (
          <h2> I am {person.name} and I am {person.age}</h2>
    )
}

export default Person
