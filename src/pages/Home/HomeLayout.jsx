import React from 'react'
import Home from './Home'
import TechLogos from './TechLogos'
import IndustryCards from './industries'
import ExpertiseGrid from './ExpertiseGrid'
import StatsComponent from './Stats'

const HomeLayout = () => {
    return (
        <div>
            <Home />
            <StatsComponent/>
            <TechLogos/>
            <ExpertiseGrid/>
            <IndustryCards/>
        </div>
    )
}

export default HomeLayout