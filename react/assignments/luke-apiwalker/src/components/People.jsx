import axios from 'axios'
import { useEffect} from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
const People = () => {
    const {number} = useParams()
    const [personName , setPersonName] = useState('')
    const [height , setHeight] = useState('')
    const [hair_color , setHairColor] = useState('')
    const [skin_color , setSkinColor] = useState('')
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${number}/`)
            .then(({data}) =>{
            console.log(data)
            const {name} = data;
            const {height}  = data;
            const {hair_color} = data;
            const {skin_color} = data;
            setPersonName(name);
            setHeight(height);
            setHairColor(hair_color);
            setSkinColor(skin_color);
        })
            .catch((err) => {
                console.log(err)
            });

    }, [number])

    return (
        <>
        <h2>Info Person #{number}</h2>
        <div style={{textAlign:'start', fontSize:'larger'}}>
        <li> {personName} </li>
        <li> {height} cm </li>
        <li> {hair_color} </li>
        <li> {skin_color} </li>
        </div>
        </>
    )
}

export default People;