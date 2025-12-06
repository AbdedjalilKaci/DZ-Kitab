import React from 'react'
import { Hero } from '../components/landingpage-sections/hero'
import { Services } from '../components/landingpage-sections/services'
import { Books } from '../components/landingpage-sections/books'
export const Landingpage = () => {
    return (
        <div className="">
            <Hero/> 
            <Services/>
            <Books/>
        </div>
    )
}
