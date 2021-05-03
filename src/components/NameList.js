import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']

    // let names_jsx = names.map(name => <h2>{name}</h2>)

    // we can use Objects as well

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 28
        },
        {
            id: 2,
            name: 'Clark',
            age: 30
        },
        {
            id: 3,
            name: 'Diana',
            age: 40
        }
    ]

    const personList = persons.map( person => (
        <Person key={person.name} person = {person}></Person>
    ))

    return (
        <div>
           {personList}
        </div>
    )
}

export default NameList
