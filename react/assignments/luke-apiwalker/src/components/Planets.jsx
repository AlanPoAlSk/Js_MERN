import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

const Planet = () =>{

    const {number} = useParams()
    const [planetName , setPlanetName] = useState('')
    const [climate , setClimate] = useState('')
    const [terrain , setTerrain] = useState('')
    const [surface_water , setSurfaceWater] = useState('')
    const [population , setPopulation] = useState('')

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${number}/`)
        .then(({data}) =>{
            console.log(data)
            const {name} = data
            const {climate} = data
            const {terrain} = data
            const {surface_water} = data
            const {population} = data
            setPlanetName(name);
            setClimate(climate);
            setTerrain(terrain);
            setSurfaceWater(surface_water);
            setPopulation(population);
        })
        .catch((err) => {
            console.log(err)
        }, [number]);
    })


    return(
        <>
        <h2>Info Planet #{number}</h2>
        <div style={{textAlign:'start', fontSize:'larger'}}>
        <li> {planetName} </li>
        <li> {climate} </li>
        <li> {terrain} </li>
        <li> {surface_water} </li>
        <li> {population} </li>
        </div>
        </>
    )
}

export default Planet;