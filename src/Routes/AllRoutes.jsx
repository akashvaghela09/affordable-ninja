import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './Admin';
import { Contact } from './Contact';
import { DetailsPage } from './DetailsPage';
import { HomePage } from './HomePage';
import { NotFound } from './NotFound';
import { ProductPage } from './ProductPage';

const AllRoutes = () => {
    return (
        <div className='h-fit'>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/:brand" element={<ProductPage />} />
                <Route path="/:brand/:id" element={<DetailsPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    )
}

export { AllRoutes }