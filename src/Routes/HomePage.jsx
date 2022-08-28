import React from 'react';
import { Banner } from '../Components/Banner';
import { FAQ } from '../Components/FAQ';
import { HowItWorks } from '../Components/HowItWorks';
import { Reviews } from '../Components/Reviews';
import { StillCantFind } from '../Components/StillCantFind';
import { WhyUs } from '../Components/WhyUs';

const HomePage = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <Banner />
            <HowItWorks />
            <WhyUs />
            <Reviews />
            <FAQ />
            <StillCantFind />
        </div>
    )
}

export { HomePage }