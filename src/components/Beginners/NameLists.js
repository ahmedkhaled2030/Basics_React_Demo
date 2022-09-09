import React from 'react';
import Person from './Person'

function NameLists() {
    const persons = [
        {
            id : 1 ,
            name : "ahmed",
            age : 26,
            skill : 'vue'
        } ,
        {
            id : 2 ,
            name : "ali",
            age : 35,
            skill : 'react'
        } ,
        {
            id : 3 ,
            name : "khattab",
            age : 30,
            skill : 'angular'
        } ,
    ]
    const NameLists = persons.map(
        person => <Person key ={person.id} person = {person} />
         )
  return (
    <div>{NameLists}</div>
  )
}

export default NameLists